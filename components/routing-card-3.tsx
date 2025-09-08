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
    from_country: z.string().min(1, { message: "From country is required" }),
    from_port: z.string().min(1, { message: "From port/area is required" }),
    pickup_required: z.boolean().optional(),
    pickup_location: z.string().optional(),
    to_country: z.string().min(1, { message: "To country is required" }),
    to_port: z.string().min(1, { message: "To port/area is required" }),
    delivery_required: z.boolean().optional(),
    delivery_location: z.string().optional(),
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
      from_country: "",
      from_port: "",
      pickup_required: false,
      pickup_location: "",
      to_country: "",
      to_port: "",
      delivery_required: false,
      delivery_location: "",
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
                      control={control}
                      name={`routing.${index}.from_country`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <SearchableCountrySelect
                            value={field.value}
                            onValueChange={field.onChange}
                            placeholder="Select country"
                            className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel className="block mb-2">Port/Area</FormLabel>
                  <FormControl>
                    <Controller
                      control={control}
                      name={`routing.${index}.from_port`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            {...field}
                            placeholder="Enter port/area"
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
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
                    control={control}
                    name={`routing.${index}.pickup_required`}
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
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
                control={control}
                name={`routing.${index}.pickup_required`}
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
                            control={control}
                            name={`routing.${index}.pickup_location`}
                            render={({ field, fieldState: { error } }) => (
                              <>
                                <Input
                                  {...field}
                                  placeholder="Enter pickup location"
                                  className={`mt-2 ${error ? 'border-red-500' : ''}`}
                                />
                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                              </>
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
                      control={control}
                      name={`routing.${index}.to_country`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <SearchableCountrySelect
                            value={field.value}
                            onValueChange={field.onChange}
                            placeholder="Select country"
                            className="w-full max-w-[300px] !border-2 !rounded-xl !border-gray-200"
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                        </>
                      )}
                    />
                  </FormControl>
                </FormItem>

                <FormItem>
                  <FormLabel className="block mb-2">Port/Area</FormLabel>
                  <FormControl>
                    <Controller
                      control={control}
                      name={`routing.${index}.to_port`}
                      render={({ field, fieldState: { error } }) => (
                        <>
                          <Input
                            {...field}
                            placeholder="Enter port/area"
                            className={`mt-2 ${error ? 'border-red-500' : ''}`}
                          />
                          {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
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
                    control={control}
                    name={`routing.${index}.delivery_required`}
                    render={({ field }) => (
                      <div className="flex items-center space-x-2">
                        <Checkbox
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
                control={control}
                name={`routing.${index}.delivery_required`}
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
                            control={control}
                            name={`routing.${index}.delivery_location`}
                            render={({ field, fieldState: { error } }) => (
                              <>
                                <Input
                                  {...field}
                                  placeholder="Enter delivery location"
                                  className={`mt-2 ${error ? 'border-red-500' : ''}`}
                                />
                                {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
                              </>
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
 