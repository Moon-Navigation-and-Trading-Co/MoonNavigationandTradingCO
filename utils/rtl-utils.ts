"use client";

import { useLocale } from 'next-intl';

/**
 * Hook to get RTL-aware direction
 * @returns 'rtl' for Arabic, 'ltr' for other languages
 */
export function useRTLDirection() {
  const locale = useLocale();
  return locale === 'ar' ? 'rtl' : 'ltr';
}

/**
 * Hook to check if current locale is RTL
 * @returns true for Arabic, false for other languages
 */
export function useIsRTL() {
  const locale = useLocale();
  return locale === 'ar';
}

/**
 * Utility function to get RTL-aware text alignment class
 * @param defaultAlignment - Default alignment for LTR languages
 * @returns Tailwind class for proper text alignment
 */
export function getRTLTextAlign(defaultAlignment: 'left' | 'right' | 'center' = 'left') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, flip left/right alignments
    switch (defaultAlignment) {
      case 'left':
        return 'text-right';
      case 'right':
        return 'text-left';
      case 'center':
        return 'text-center';
      default:
        return 'text-right';
    }
  }

  // For other languages, use default alignment
  return `text-${defaultAlignment}`;
}

/**
 * Utility function to get RTL-aware flex direction
 * @param defaultDirection - Default flex direction for LTR languages
 * @returns Tailwind class for proper flex direction
 */
export function getRTLFlexDirection(defaultDirection: 'row' | 'row-reverse' = 'row') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, flip row directions
    return defaultDirection === 'row' ? 'flex-row-reverse' : 'flex-row';
  }

  // For other languages, use default direction
  return `flex-${defaultDirection}`;
}

/**
 * Utility function to get RTL-aware justify content
 * @param defaultJustify - Default justify content for LTR languages
 * @returns Tailwind class for proper justify content
 */
export function getRTLJustifyContent(defaultJustify: 'start' | 'end' | 'between' | 'around' | 'evenly' = 'start') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, flip start/end
    switch (defaultJustify) {
      case 'start':
        return 'justify-end';
      case 'end':
        return 'justify-start';
      default:
        return `justify-${defaultJustify}`;
    }
  }

  // For other languages, use default justify
  return `justify-${defaultJustify}`;
}

/**
 * Utility function to get RTL-aware padding classes
 * @param left - Left padding for LTR
 * @param right - Right padding for LTR
 * @returns Object with pl and pr classes
 */
export function getRTLPadding(left: string, right: string) {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, swap left and right padding
    return {
      pl: right,
      pr: left
    };
  }

  // For other languages, use original padding
  return {
    pl: left,
    pr: right
  };
}

/**
 * Utility function to get RTL-aware margin classes
 * @param left - Left margin for LTR
 * @param right - Right margin for LTR
 * @returns Object with ml and mr classes
 */
export function getRTLMargin(left: string, right: string) {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, swap left and right margin
    return {
      ml: right,
      mr: left
    };
  }

  // For other languages, use original margin
  return {
    ml: left,
    mr: right
  };
}

/**
 * Utility function to conditionally apply RTL-specific classes
 * @param ltrClass - Class to apply for LTR languages
 * @param rtlClass - Class to apply for RTL languages
 * @returns The appropriate class based on current locale
 */
export function getRTLClass(ltrClass: string, rtlClass: string) {
  const locale = useLocale();
  return locale === 'ar' ? rtlClass : ltrClass;
}

/**
 * Utility function to get RTL-aware border radius classes
 * @param left - Left border radius for LTR
 * @param right - Right border radius for LTR
 * @returns Object with rounded-l and rounded-r classes
 */
export function getRTLBorderRadius(left: string, right: string) {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, swap left and right border radius
    return {
      'rounded-l': right,
      'rounded-r': left
    };
  }

  // For other languages, use original border radius
  return {
    'rounded-l': left,
    'rounded-r': right
  };
}

/**
 * Utility function to get RTL-aware positioning classes
 * @param left - Left positioning for LTR
 * @param right - Right positioning for LTR
 * @returns Object with left and right classes
 */
export function getRTLPosition(left: string, right: string) {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, swap left and right positioning
    return {
      left: right,
      right: left
    };
  }

  // For other languages, use original positioning
  return {
    left: left,
    right: right
  };
}

/**
 * Utility function to get RTL-aware transform classes
 * @param defaultTransform - Default transform for LTR
 * @returns RTL-aware transform class
 */
export function getRTLTransform(defaultTransform: string = '') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, add scaleX(-1) to flip horizontally
    return `${defaultTransform} scale-x-[-1]`.trim();
  }

  // For other languages, use original transform
  return defaultTransform;
}

/**
 * Utility function to get RTL-aware icon class
 * @param iconName - Icon name or class
 * @returns RTL-aware icon class
 */
export function getRTLIcon(iconName: string) {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, add flip class to icons
    return `${iconName} rtl-flip`;
  }

  // For other languages, use original icon
  return iconName;
}

/**
 * Utility function to get RTL-aware animation direction
 * @param defaultDirection - Default animation direction
 * @returns RTL-aware animation direction
 */
export function getRTLAnimationDirection(defaultDirection: 'normal' | 'reverse' = 'normal') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, reverse animations
    return defaultDirection === 'normal' ? 'reverse' : 'normal';
  }

  // For other languages, use original direction
  return defaultDirection;
}

/**
 * Utility function to get RTL-aware list style
 * @param defaultStyle - Default list style
 * @returns RTL-aware list style
 */
export function getRTLListStyle(defaultStyle: 'disc' | 'decimal' | 'none' = 'disc') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, use appropriate list style
    return defaultStyle;
  }

  // For other languages, use original style
  return defaultStyle;
}

/**
 * Utility function to get RTL-aware input direction
 * @param defaultDirection - Default input direction
 * @returns RTL-aware input direction
 */
export function getRTLInputDirection(defaultDirection: 'ltr' | 'rtl' = 'ltr') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, use RTL input direction
    return 'rtl';
  }

  // For other languages, use original direction
  return defaultDirection;
}

/**
 * Utility function to get RTL-aware text direction
 * @param defaultDirection - Default text direction
 * @returns RTL-aware text direction
 */
export function getRTLTextDirection(defaultDirection: 'ltr' | 'rtl' = 'ltr') {
  const locale = useLocale();

  if (locale === 'ar') {
    // For Arabic, use RTL text direction
    return 'rtl';
  }

  // For other languages, use original direction
  return defaultDirection;
} 