import { useLocation } from "react-router";
import Breadcrumbs from "@/components/shared/pageProps/Breadcrumbs";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useSendContactMutation } from "@/redux/features/contact/contact.api";

// ----------------------------------------------------
// ZOD SCHEMA
// ----------------------------------------------------
const contactSchema = z.object({
  clientName: z.string().min(1, "Name is required"),
  email: z.string().email("Provide a valid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

// ----------------------------------------------------
// GOOGLE MAP CONFIG
// ----------------------------------------------------
// 1. Get a valid Map Embed URL: Go to Google Maps, search for the address, click 'Share' -> 'Embed a map', and copy the 'src' value.
// 2. IMPORTANT: If you want to use the Google Maps Platform (API Key), you should use a dedicated library like '@react-google-maps/api'
// For this example, we'll use a placeholder embed link for a generic area (e.g., Seattle, as hinted in your screenshot).
const GOOGLE_MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10768.80482937748!2d-122.33644262193245!3d47.60620958197026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab2d8c3639d%3A0x6a164c09d3b48f9!2sSeattle%2C%20WA%2C%20USA!5e0!3m2!1sen!2sbd!4v1700908800000!5m2!1sen!2sbd";

// ----------------------------------------------------
// COMPONENT
// ----------------------------------------------------
const Contact = () => {
  const location = useLocation();
  const prevLocation = location?.state?.data || "";

  // The RTK Query mutation hook is retained from your original code
  const [sendContact] = useSendContactMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      await sendContact(data).unwrap();
      reset();
    } catch (err) {
      console.error("Error sending contact form:", err); // Use console.error for clarity
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-4 ">
      <Breadcrumbs title="Contact" prevLocation={prevLocation} />

      {/* SUCCESS MESSAGE */}
      {isSubmitSuccessful && (
        <p className="pb-10 w-full font-medium text-green-600">
          Thank you, your message has been sent successfully!
        </p>
      )}

      {/* MAIN GRID — matches screenshot */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
        {/* LEFT SIDE — FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-3xl font-semibold font-titleFont mb-3">
            LEAVE US A MESSAGE
          </h1>
          <p className="text-sm text-gray-500 mb-5">type your description here</p>

          <div className="flex flex-col gap-5">
            {/* INPUTS - Retained from your original code */}
            <div className="flex flex-col md:flex-row gap-5">
              {/* NAME - Grouped with email for better layout matching screenshot */}
              <div className="flex-1">
                <Input
                  {...register("clientName")}
                  placeholder="Your name *"
                  className="border rounded-md h-11"
                />
                {errors.clientName && (
                  <p className="text-red-500 text-sm mt-1">{errors.clientName.message}</p>
                )}
              </div>
              
              {/* EMAIL */}
              <div className="flex-1">
                <Input
                  {...register("email")}
                  placeholder="Your email *"
                  className="border rounded-md h-11"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <Input
                {...register("subject")}
                placeholder="Subject"
                className="border rounded-md h-11"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <Textarea
                {...register("message")}
                placeholder="Type your message here..."
                rows={5}
                className="border rounded-md resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>
            
            {/* BUTTON */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-40 bg-pink-500 text-white hover:bg-pink-600 self-start" // self-start to match screenshot's alignment
            >
              {isSubmitting ? "Sending..." : "SEND MESSAGE"}
            </Button>
          </div>
        </form>

        {/* RIGHT SIDE — OFFICE INFO - Retained from your original code */}
        <div>
          <h1 className="text-3xl font-semibold font-titleFont mb-3">
            Get office info
          </h1>
          <p className="text-sm text-gray-500 mb-5">
            type Your description here
          </p>

          <div className="space-y-6 text-gray-700">
            <div>
              <h2 className="font-semibold">Our Address</h2>
              <p className="text-sm">
                Haltico - Responsive Prestashop Theme<br />
                The Barn, Ullenhall, Henley in Arden B578 5CC,<br />
                England, United States
              </p>
            </div>

            <div>
              <h2 className="font-semibold">Call us:</h2>
              <p className="text-sm">716-298-1822</p>
            </div>

            <div>
              <h2 className="font-semibold">Email us:</h2>
              <p className="text-sm">info@example.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* GOOGLE MAP SECTION - CORRECTED IFRAME SOURCE */}
      <div className="w-full h-[400px] mb-20 overflow-hidden border border-gray-200 rounded-lg shadow-md">
        <iframe
          title="google-map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          // The source below uses a valid Google Maps embed link.
          src={GOOGLE_MAP_EMBED_SRC}
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;