# Translation Fix Summary

## Issue:
- The `RentVesselForm` component was using `tt('vesselDetails')` 
- `tt` uses the 'forms' translation namespace
- `vesselDetails` was only available in the root level, not in the 'forms' section

## Fix Applied:
1. ✅ Added `"vesselDetails": "Vessel Details"` to the 'forms' section in `messages/en.json`
2. ✅ Added `"vesselDetails": "تفاصيل السفينة"` to the 'forms' section in `messages/ar.json`

## Result:
- The component now correctly displays "Vessel Details" in English
- The component now correctly displays "تفاصيل السفينة" in Arabic
- Translation key `forms.vesselDetails` is now properly accessible

## Files Updated:
- messages/en.json
- messages/ar.json
