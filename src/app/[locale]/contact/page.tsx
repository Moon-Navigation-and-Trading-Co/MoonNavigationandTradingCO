import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-raleway font-regular text-primary text-left mb-8">Contact Us</h1>
      <ContactForm />
    </section>
  );
} 