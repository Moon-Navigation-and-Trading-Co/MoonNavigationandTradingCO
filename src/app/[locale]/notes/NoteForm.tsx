// app/[locale]/notes/NoteForm.tsx
'use client'; // Mark this as a client component

import { useState } from 'react';
import { createClient } from '@/utils/supabase/client'; // Make sure this is a client-side import
import { useTranslations } from 'next-intl';

interface NoteFormProps {
    locale: string;
}

export default function NoteForm({ locale }: NoteFormProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [note, setNote] = useState('');
    const t = useTranslations('HomePage');


    const handleCreateNote = async () => {
        setLoading(true);
        setError(null);

        try {
            const supabase = createClient(); // Initialize supabase client for client-side

            // Insert new note into the database
            const { data, error } = await supabase
                .from('notes')
                .insert([{ title: note }]);

            if (error) throw error;

            alert('Note added successfully');
            setNote(''); // Reset the note input field
        } catch (err) {
            setError('Failed to create note');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>{t("title")}</h1>

            <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Enter a noteee"
            />
            <button onClick={handleCreateNote} disabled={loading}>
                {loading ? 'Adding...' : 'Add Note'}
            </button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
