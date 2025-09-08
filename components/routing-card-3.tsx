import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Controller, useFieldArray } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";
import { SearchableCountrySelect } from './searchable-country-select';
import { Checkbox } from './ui/checkbox';
import { z } from 'zod';

// Routing schema definition for LCL with pickup/delivery options
export const routingCard3Schema = z.object({
  routing: z.array(z.object({
    fromCountry: z.string().min(1, { message: "From country is required" }),
    fromPort: z.string().min(1, { message: "From port/area is required" }),
    pickupRequired: z.boolean().optional(),
    pickupLocation: z.string().optional(),
    toCountry: z.string().min(1, { message: "To country is required" }),
    toPort: z.string().min(1, { message: "To port/area is required" }),
    deliveryRequired: z.boolean().optional(),
    deliveryLocation: z.string().optional(),
  })),
});

interface RoutingCard3Props {
  control: any;
}

export default function RoutingCard3({ control }: RoutingCard3Props) {
  const t = useTranslations("forms");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "routing",
  });

  const addRoute = () => {
    append({
      fromCountry: "",
      fromPort: "",
      pickupRequired: false,
      pickupLocation: "",
      toCountry: "",
      toPort: "",
      deliveryRequired: false,
      deliveryLocation: "",
    });
  };

  return (
    <div className="">
      <h1 className='text-xl font-raleway font-medium'>{t("routing.title")}</h1>
      <div className='pt-8 pb-10 grid gap-5 p-4 rounded-3xl'>
        {fields.map((field, index) => (
          <div key={field.id} className="space-y-6">
            {/* From Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">From</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel className="block mb-2">Country</FormLabel>
                  <FormControl>
                    <Controller
                      name={`routing.${index}.fromCountry`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <SearchableCountrySelect
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            placeholder="Select country"
                            className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                          />
                          {error && <p className="text-red-500 mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel className="block mb-2">Port/Area</FormLabel>
                  <FormControl>
                    <Controller
                      name={`routing.${index}.fromPort`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            className="w-full max-w-[300px] border-2 rounded-xl"
                            placeholder="Enter port or area"
                            {...field}
                          />
                          {error && <p className="text-red-500 mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>

              {/* Pick Up Required Checkbox */}
              <FormItem>
                <FormControl>
                  <Controller
                    name={`routing.${index}.pickupRequired`}
                    control={control}
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`pickup-${index}`}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor={`pickup-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Pick Up Required
                        </label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              {/* Pick Up Location Information - shown when pickup is required */}
              <Controller
                name={`routing.${index}.pickupRequired`}
                control={control}
                render={({ field: pickupField }) => (
                  pickupField.value && (
                    <div className="border border-gray-200 rounded-lg p-4 max-w-[400px]">
                      <h5 className="font-medium text-black mb-2">
                        Pick Up Location Information
                      </h5>
                      <FormItem>
                        <FormLabel>Pick Up Location</FormLabel>
                        <FormControl>
                          <Controller
                            name={`routing.${index}.pickupLocation`}
                            control={control}
                            render={({ field, fieldState }) => (
                              <Input
                                {...field}
                                placeholder="Enter pick up location details"
                                className="w-full max-w-[300px] border-2 rounded-xl"
                              />
                            )}
                          />
                        </FormControl>
                      </FormItem>
                    </div>
                  )
                )}
              />
            </div>

            {/* To Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-gray-700">To</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem>
                  <FormLabel className="block mb-2">Country</FormLabel>
                  <FormControl>
                    <Controller
                      name={`routing.${index}.toCountry`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <SearchableCountrySelect
                            value={field.value || ""}
                            onValueChange={field.onChange}
                            placeholder="Select country"
                            className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                          />
                          {error && <p className="text-red-500 mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel className="block mb-2">Port/Area</FormLabel>
                  <FormControl>
                    <Controller
                      name={`routing.${index}.toPort`}
                      control={control}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            className="w-full max-w-[300px] border-2 rounded-xl"
                            placeholder="Enter port or area"
                            {...field}
                          />
                          {error && <p className="text-red-500 mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>
              </div>

              {/* Delivery Required Checkbox */}
              <FormItem>
                <FormControl>
                  <Controller
                    name={`routing.${index}.deliveryRequired`}
                    control={control}
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id={`delivery-${index}`}
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <label
                          htmlFor={`delivery-${index}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Delivery Required
                        </label>
                      </div>
                    )}
                  />
                </FormControl>
              </FormItem>

              {/* Delivery Location Information - shown when delivery is required */}
              <Controller
                name={`routing.${index}.deliveryRequired`}
                control={control}
                render={({ field: deliveryField }) => (
                  deliveryField.value && (
                    <div className="border border-gray-200 rounded-lg p-4 max-w-[400px]">
                      <h5 className="font-medium text-black mb-2">
                        Delivery Location Information
                      </h5>
                      <FormItem>
                        <FormLabel>Delivery Location</FormLabel>
                        <FormControl>
                          <Controller
                            name={`routing.${index}.deliveryLocation`}
                            control={control}
                            render={({ field, fieldState }) => (
                              <Input
                                {...field}
                                placeholder="Enter delivery location details"
                                className="w-full max-w-[300px] border-2 rounded-xl"
                              />
                            )}
                          />
                        </FormControl>
                      </FormItem>
                    </div>
                  )
                )}
              />
            </div>

            {/* Remove button for additional locations */}
            {fields.length > 1 && (
              <div className="flex justify-end">
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => remove(index)}
                  className="max-w-[150px]"
                >
                  <Minus className="h-4 w-4 mr-2" />
                  Remove
                </Button>
              </div>
            )}
          </div>
        ))}

        {/* Add Additional Location Button */}
        <Button
          type="button"
          className="mt-4 max-w-[200px] bg-primary text-sm text-white rounded-lg"
          onClick={addRoute}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Route
        </Button>
      </div>
    </div>
  );
} 
 