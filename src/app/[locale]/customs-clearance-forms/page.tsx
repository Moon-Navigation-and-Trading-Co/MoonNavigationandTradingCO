"use client"

import React, { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import CustomsClearanceForm from '@/components/customs-clearance-form';
import FormTabs from '@/components/form-tabs-variant-1';
import { createClient } from '@/utils/supabase/client';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import { sendFormEmail } from '@/utils/email-helper';
import { generate_quotation_number } from "@/utils/quotation/generator";
import Spinner from '@/components/spinner';

export default function CustomsClearanceFormsPage() {
  const t = useTranslations('forms');
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const { toast } = useToast();
  const router = useRouter();

  // Fetch the authenticated user on component mount
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setIsLoading(false);
    };

    fetchUser();
  }, [supabase.auth]);

  if (isLoading) {
    return <div className='w-full h-[500px] flex items-center justify-center'>
      <Spinner />
    </div>;
  }

  const handleSubmit = async (formData: any) => {
    try {
      // Flatten the formData before inserting into Supabase
      const flattenedData = {
        user_id: user?.id || null,
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
        supporting_files: formData.supportingFiles ? JSON.stringify(formData.supportingFiles) : null,
        company_name: formData.companyDetails?.company_name,
        contact_person_name: formData.companyDetails?.contact_person_name,
        title: formData.companyDetails?.title,
        country_of_origin: formData.companyDetails?.country_of_origin,
        company_email: formData.companyDetails?.company_email,
        additional_email: formData.companyDetails?.additional_email,
        phone_number: formData.companyDetails?.phone_number,
        additional_phone_number: formData.companyDetails?.additional_phone_number,
        quotation_number: await generate_quotation_number("customs_clearance")
      };

      console.log("Customs Clearance Form Data:", flattenedData);

      // Send email notification FIRST
      try {
        await sendFormEmail(formData, 'customs_clearance');
        console.log('Email sent successfully');
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
        // Continue with form submission even if email fails
      }

      // Insert into database
      const { data, error } = await supabase
        .from("customs_clearance")  // Your Supabase table
        .insert([flattenedData]);  // Insert the data

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
        router.push('/customs-clearance-forms');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit form, please try again",
        variant: "destructive"
      });
    }
  };

  // Single tab for customs clearance
  const tabData = [
    {
      id: "customs-clearance",
      title: "Customs Clearance",
      description: "Professional customs clearance and documentation services for your import/export needs",
      content: <CustomsClearanceForm onSubmit={handleSubmit} />
    }
  ];

  return (
    <div className='flex flex-col w-full'>
      <div className='mt-20 flex flex-col gap-5 px-4'>
        <h1 className='text-3xl font-raleway font-medium'>Customs Clearance</h1>
        <p className=''>Professional customs clearance services for your import/export needs</p>
      </div>
      
      <FormTabs tabData={tabData} />
    </div>
  );
} 