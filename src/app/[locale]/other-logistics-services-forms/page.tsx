"use client";

import { generate_quotation_number } from "@/utils/quotation/generator";

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast"
import { useRouter } from 'next/navigation'
import Spinner from '@/components/spinner';
import { sendFormEmail } from '@/utils/email-helper';
import FormTabs from '@/components/form-tabs-variant-1';
import HandlingStevedoringStorageForm from '@/components/handling-stevedoring-storage-form';
import CustomsClearanceForm from '@/components/customs-clearance-form';
import FAQSearch from '@/components/faq';

const Page: React.FC = () => {
    const t = useTranslations('forms');
    const supabase = createClient();
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast()
    const router = useRouter()

    const submitForm = useCallback(async (formData: any, formType: any) => {
        setIsSubmitting(true);
        
        try {
            console.log("=== OTHER LOGISTICS SERVICES FORMS SUBMIT START ===");
            console.log("Form Type:", formType);
            console.log("Form Data:", formData);

            // Handle different form types with their specific data structures
            let flattenedData: any = {
                user_id: user?.id || null,
                quotation_number: await generate_quotation_number(formType),
                company_name: formData.company_details?.company_name,
                contact_person_name: formData.company_details?.contact_person_name,
                title: formData.company_details?.title,
                country_of_origin: formData.company_details?.country_of_origin,
                company_email: formData.company_details?.company_email,
                additional_email: formData.company_details?.additional_email,
                phone_number: formData.company_details?.phone_number,
                additional_phone_number: formData.company_details?.additional_phone_number,
                supporting_files: formData.supporting_files ? JSON.stringify(formData.supporting_files) : null,
            };

            // Add form-specific fields based on form type
            if (formType === "handling_stevedoring_storage") {
                flattenedData = {
                    ...flattenedData,
                    import_export: formData.importExport,
                    port_airport: formData.portAirport,
                    location: formData.location,
                    entry_mode: formData.entry_mode,
                    itemized_data: formData.itemized_data,
                    consolidated_data: formData.consolidated_data,
                    additional_info: formData.additionalInfo,
                    commercial_terms: formData.commercialTerms,
                    effective_date: formData.effectiveDate,
                    expiry_date: formData.expiryDate,
                    service_contract: formData.serviceContract,
                    handling_stevedoring: formData.handlingStevedoring,
                    loading_cargo: formData.loadingCargo,
                    discharging_cargo: formData.dischargingCargo,
                    lashing_cargo: formData.lashingCargo,
                    unlashing_cargo: formData.unlashingCargo,
                    port_handling_stevedoring: formData.portHandlingStevedoring,
                    cargo_reception_delivery: formData.cargoReceptionDelivery,
                    reception_before_shipment: formData.receptionBeforeShipment,
                    reception_after_discharge: formData.receptionAfterDischarge,
                    storage_warehousing: formData.storageWarehousing,
                    temporary_storage: formData.temporaryStorage,
                    handling_requirements: formData.handlingRequirements,
                    crane_heavy_lift: formData.additional_services?.crane_heavy_lift,
                    customs_clearance: formData.additional_services?.customs_clearance,
                    transport_to_from_port: formData.additional_services?.transport_to_from_port,
                    inspection_quality_control: formData.additional_services?.inspection_quality_control,
                    escort_permits: formData.additional_services?.escort_permits,
                    engineering_support: formData.additional_services?.engineering_support,
                    other: formData.additional_services?.other,
                    other_specify: formData.additional_services?.other_specify,
                    additional_requirements: formData.additional_services?.additional_requirements,
                };
            } else if (formType === "customs_clearance") {
                flattenedData = {
                    ...flattenedData,
                    clearance_type: formData.clearanceType,
                    shipment_mode: formData.shipmentMode,
                    container_type: formData.containerType,
                    is_dangerous: formData.isDangerous,
                    dangerous_goods_class: formData.dangerousGoodsClass,
                    dangerous_goods_un_number: formData.dangerousGoodsUnNumber,
                    dangerous_goods_proper_name: formData.dangerousGoodsProperName,
                    dangerous_goods_packing_group: formData.dangerousGoodsPackingGroup,
                    dangerous_goods_quantity: formData.dangerousGoodsQuantity,
                    dangerous_goods_net_weight: formData.dangerousGoodsNetWeight,
                    dangerous_goods_volume: formData.dangerousGoodsVolume,
                    dangerous_goods_technical_name: formData.dangerousGoodsTechnicalName,
                    dangerous_goods_limited_quantity: formData.dangerousGoodsLimitedQuantity,
                    dangerous_goods_marine_pollutant: formData.dangerousGoodsMarinePollutant,
                    dangerous_goods_radioactive: formData.dangerousGoodsRadioactive,
                    dangerous_goods_flammable: formData.dangerousGoodsFlammable,
                    dangerous_goods_corrosive: formData.dangerousGoodsCorrosive,
                    dangerous_goods_toxic: formData.dangerousGoodsToxic,
                    dangerous_goods_oxidizing: formData.dangerousGoodsOxidizing,
                    dangerous_goods_organic_peroxide: formData.dangerousGoodsOrganicPeroxide,
                    dangerous_goods_self_reacting: formData.dangerousGoodsSelfReacting,
                    dangerous_goods_pyrophoric: formData.dangerousGoodsPyrophoric,
                    dangerous_goods_water_reactive: formData.dangerousGoodsWaterReactive,
                    dangerous_goods_self_heating: formData.dangerousGoodsSelfHeating,
                    dangerous_goods_emits_flammable_gas: formData.dangerousGoodsEmitsFlammableGas,
                    dangerous_goods_aspiration_hazard: formData.dangerousGoodsAspirationHazard,
                    dangerous_goods_environmental_hazard: formData.dangerousGoodsEnvironmentalHazard,
                    dangerous_goods_other_hazards: formData.dangerousGoodsOtherHazards,
                    dangerous_goods_handling_instructions: formData.dangerousGoodsHandlingInstructions,
                    dangerous_goods_emergency_contact: formData.dangerousGoodsEmergencyContact,
                    dangerous_goods_emergency_phone: formData.dangerousGoodsEmergencyPhone,
                    dangerous_goods_emergency_email: formData.dangerousGoodsEmergencyEmail,
                    dangerous_goods_emergency_address: formData.dangerousGoodsEmergencyAddress,
                    dangerous_goods_emergency_city: formData.dangerousGoodsEmergencyCity,
                    dangerous_goods_emergency_state: formData.dangerousGoodsEmergencyState,
                    dangerous_goods_emergency_country: formData.dangerousGoodsEmergencyCountry,
                    dangerous_goods_emergency_postal_code: formData.dangerousGoodsEmergencyPostalCode,
                    dangerous_goods_emergency_notes: formData.dangerousGoodsEmergencyNotes,
                    origin_country: formData.originCountry,
                    destination_country: formData.destinationCountry,
                    port_of_loading: formData.portOfLoading,
                    port_of_discharge: formData.portOfDischarge,
                    estimated_arrival_date: formData.estimatedArrivalDate,
                    estimated_departure_date: formData.estimatedDepartureDate,
                    cargo_description: formData.cargoDescription,
                    cargo_value: formData.cargoValue,
                    cargo_weight: formData.cargoWeight,
                    cargo_volume: formData.cargoVolume,
                    cargo_quantity: formData.cargoQuantity,
                    cargo_unit: formData.cargoUnit,
                    cargo_hs_code: formData.cargoHsCode,
                    cargo_commodity_code: formData.cargoCommodityCode,
                    cargo_country_of_origin: formData.cargoCountryOfOrigin,
                    cargo_manufacturer: formData.cargoManufacturer,
                    cargo_brand: formData.cargoBrand,
                    cargo_model: formData.cargoModel,
                    cargo_serial_number: formData.cargoSerialNumber,
                    cargo_batch_number: formData.cargoBatchNumber,
                    cargo_lot_number: formData.cargoLotNumber,
                    cargo_expiry_date: formData.cargoExpiryDate,
                    cargo_production_date: formData.cargoProductionDate,
                    cargo_import_license: formData.cargoImportLicense,
                    cargo_export_license: formData.cargoExportLicense,
                    cargo_health_certificate: formData.cargoHealthCertificate,
                    cargo_phytosanitary_certificate: formData.cargoPhytosanitaryCertificate,
                    cargo_certificate_of_origin: formData.cargoCertificateOfOrigin,
                    cargo_quality_certificate: formData.cargoQualityCertificate,
                    cargo_testing_certificate: formData.cargoTestingCertificate,
                    cargo_insurance_certificate: formData.cargoInsuranceCertificate,
                    cargo_packing_list: formData.cargoPackingList,
                    cargo_commercial_invoice: formData.cargoCommercialInvoice,
                    cargo_bill_of_lading: formData.cargoBillOfLading,
                    cargo_air_waybill: formData.cargoAirWaybill,
                    cargo_road_waybill: formData.cargoRoadWaybill,
                    cargo_rail_waybill: formData.cargoRailWaybill,
                    cargo_other_document: formData.cargoOtherDocument,
                    cargo_other_document_description: formData.cargoOtherDocumentDescription,
                };
            }

            console.log("Flattened Data:", flattenedData);

            // Send email notification FIRST
            try {
                await sendFormEmail(formData, formType);
                console.log('Email sent successfully');
            } catch (emailError) {
                console.error('Email sending failed:', emailError);
                // Continue with form submission even if email fails
            }

            // Determine the correct table based on form type
            const tableName = formType === "handling_stevedoring_storage" 
                ? "handling_stevedoring_storage" 
                : "customs_clearance";

            const { data, error } = await supabase
                .from(tableName)
                .insert([flattenedData]);

            if (error) {
                console.log(error);
                toast({
                    title: "Error",
                    description: "Database insert failed, but email was sent",
                    variant: "destructive"
                });
            } else {
                toast({
                    title: "Success",
                    description: "Form Added Successfully",
                });
                router.push('/other-logistics-services-forms');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            toast({
                title: "Error",
                description: "Failed to submit form, please try again",
                variant: "destructive"
            });
        } finally {
            setIsSubmitting(false);
        }

        console.log("=== OTHER LOGISTICS SERVICES FORMS SUBMIT END ===");
    }, [user?.id, supabase, toast, router]);

    // Try to fetch the authenticated user on component mount (optional)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const {
                    data: { user },
                } = await supabase.auth.getUser();

                if (user) {
                    setUser(user);
                }
            } catch (error) {
                // Silently handle auth errors - form can work without authentication
                console.log('No authenticated user found, proceeding with anonymous submission');
            }
            setIsLoading(false);
        };

        fetchUser();
    }, [supabase.auth]);

    // Memoize tab data to prevent unnecessary re-renders
    const tabData = useMemo(() => [
        {
            id: "handling-stevedoring-storage",
            title: "Handling, Stevedoring and Storage",
            description: "Professional handling, stevedoring, and storage services for your cargo needs",
            content: (
                <HandlingStevedoringStorageForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "handling_stevedoring_storage")} 
                />
            )
        },
        {
            id: "customs-clearance",
            title: "Customs Clearance",
            description: "Professional customs clearance and documentation services for your import/export needs",
            content: (
                <CustomsClearanceForm 
                    isSubmitting={isSubmitting}
                    onSubmit={(formData: any) => submitForm(formData, "customs_clearance")} 
                />
            )
        }
    ], [submitForm, isSubmitting]);

    if (isLoading) {
        return <div className='w-full h-[400px] flex items-center justify-center rounded-3xl'>
            <Spinner />
        </div>;
    }

    return (
        <div className='flex flex-col w-full'>
            <div className='mt-20 flex flex-col gap-5 px-4'>
                <h1 className='text-3xl font-raleway font-medium'>Other Logistics Services</h1>
                <p className=''>Comprehensive logistics solutions including handling, stevedoring, storage, and customs clearance services</p>
            </div>
            <FormTabs tabData={tabData} />
            <FAQSearch category="other-logistics-services-forms" />
        </div>
    );
};

export default Page;
