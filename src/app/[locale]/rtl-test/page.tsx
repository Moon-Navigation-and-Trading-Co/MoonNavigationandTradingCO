"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { useIsRTL, getRTLTextAlign, getRTLFlexDirection, getRTLJustifyContent } from '@/utils/rtl-utils';

const RTLTestPage: React.FC = () => {
  const t = useTranslations('HomePage');
  const isRTL = useIsRTL();
  const textAlignClass = getRTLTextAlign('left');
  const flexDirectionClass = getRTLFlexDirection('row');
  const justifyClass = getRTLJustifyContent('start');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            RTL (Right-to-Left) Test Page
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            This page demonstrates how the website handles Arabic text alignment and RTL layout.
            Switch between English and Arabic using the language switcher to see the difference.
          </p>
        </div>

        {/* RTL Test Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className={`text-2xl font-semibold mb-4 ${textAlignClass}`}>
            {isRTL ? 'اختبار التخطيط من اليمين إلى اليسار' : 'RTL Layout Test'}
          </h2>
          
          <div className={`flex ${flexDirectionClass} ${justifyClass} gap-4 mb-6`}>
            <div className="bg-blue-100 p-4 rounded-lg flex-1">
              <h3 className={`font-semibold mb-2 ${textAlignClass}`}>
                {isRTL ? 'العنوان الأول' : 'First Section'}
              </h3>
              <p className={`text-sm ${textAlignClass}`}>
                {isRTL 
                  ? 'هذا مثال على النص العربي مع محاذاة من اليمين إلى اليسار'
                  : 'This is an example of English text with left-to-right alignment'
                }
              </p>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg flex-1">
              <h3 className={`font-semibold mb-2 ${textAlignClass}`}>
                {isRTL ? 'العنوان الثاني' : 'Second Section'}
              </h3>
              <p className={`text-sm ${textAlignClass}`}>
                {isRTL 
                  ? 'مثال آخر على النص العربي مع التخطيط الصحيح'
                  : 'Another example of English text with proper layout'
                }
              </p>
            </div>
          </div>

          <div className={`flex ${flexDirectionClass} items-center gap-4`}>
            <span className={`text-sm ${textAlignClass}`}>
              {isRTL ? 'النص العربي:' : 'English Text:'}
            </span>
            <span className="text-gray-600">
              {t('slogan')}
            </span>
          </div>
        </div>

        {/* Translation Test Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className={`text-2xl font-semibold mb-4 ${textAlignClass}`}>
            {isRTL ? 'اختبار الترجمة' : 'Translation Test'}
          </h2>
          
          <div className="space-y-4">
            <div className={`p-4 bg-blue-50 rounded-lg ${textAlignClass}`}>
              <h3 className="font-medium mb-2">
                {isRTL ? 'الشعار:' : 'Slogan:'}
              </h3>
              <p className="text-gray-700">{t('slogan')}</p>
            </div>
            
            <div className={`p-4 bg-green-50 rounded-lg ${textAlignClass}`}>
              <h3 className="font-medium mb-2">
                {isRTL ? 'العنوان الفرعي:' : 'Tagline:'}
              </h3>
              <p className="text-gray-700">{t('tagline')}</p>
            </div>
            
            <div className={`p-4 bg-yellow-50 rounded-lg ${textAlignClass}`}>
              <h3 className="font-medium mb-2">
                {isRTL ? 'عنوان الخدمات:' : 'Services Title:'}
              </h3>
              <p className="text-gray-700">{t('servicesTitle')}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Use the language switcher in the navigation to test RTL functionality
          </p>
        </div>
      </div>
    </div>
  );
};

export default RTLTestPage; 