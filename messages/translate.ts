import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';

type JsonValue = string | number | boolean | null | JsonObject | JsonValue[];
interface JsonObject { [key: string]: JsonValue; }

async function libreTranslate(text: string, targetLang: string): Promise<string> {
  const res = await fetch('https://libretranslate.de/translate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      q: text,
      source: 'en',
      target: targetLang,
      format: 'text',
    }),
  });

  const contentType = res.headers.get('content-type') || '';
  if (!contentType.includes('application/json')) {
    const errorText = await res.text();
    throw new Error(`Expected JSON but got:\n${errorText}`);
  }

  const data = await res.json() as { translatedText: string };
  return data.translatedText;
}

async function translateObject(obj: JsonValue): Promise<JsonValue> {
  if (typeof obj === 'string') {
    if (obj.match(/^{.*}$/) || obj.match(/{.*}/)) return obj;
    const translated = await libreTranslate(obj, 'ar');
    return translated;
  } else if (Array.isArray(obj)) {
    return Promise.all(obj.map(translateObject));
  } else if (typeof obj === 'object' && obj !== null) {
    const result: JsonObject = {};
    for (const key in obj) {
      result[key] = await translateObject(obj[key]);
    }
    return result;
  } else {
    return obj;
  }
}

async function main() {
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const enPath = path.join(__dirname, 'en.json');
    const arPath = path.join(__dirname, 'ar.json');

    const enJson: JsonObject = JSON.parse(fs.readFileSync(enPath, 'utf8'));
    const arJson = await translateObject(enJson);
    fs.writeFileSync(arPath, JSON.stringify(arJson, null, 2), 'utf8');

    console.log('✅ Translation complete! Check ar.json');
  } catch (err) {
    console.error('❌ Translation failed:', err);
  }
}

main();
