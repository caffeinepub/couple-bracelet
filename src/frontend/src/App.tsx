import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "motion/react";
import { useState } from "react";

const WHATSAPP_NUMBER = "919410414884";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.651 4.8 1.788 6.818L2 30l7.384-1.764A13.932 13.932 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.61l-.422-.25-4.38 1.047 1.07-4.27-.275-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.592 9.592 4.4 16 4.4S27.6 9.592 27.6 16 22.408 27.6 16 27.6zm6.34-8.68c-.347-.174-2.054-1.013-2.373-1.129-.319-.116-.55-.174-.782.174-.232.347-.9 1.129-1.103 1.362-.203.232-.406.26-.753.087-.347-.174-1.464-.54-2.788-1.72-1.03-.918-1.725-2.052-1.928-2.4-.203-.347-.022-.535.153-.708.157-.155.347-.405.521-.608.174-.203.232-.347.347-.579.116-.232.058-.434-.029-.608-.087-.174-.782-1.884-1.071-2.58-.282-.677-.569-.585-.782-.596l-.666-.012c-.232 0-.608.087-.927.434-.319.347-1.218 1.19-1.218 2.9s1.247 3.364 1.42 3.596c.174.232 2.453 3.745 5.944 5.252.831.358 1.48.572 1.986.733.834.265 1.594.228 2.194.138.669-.1 2.054-.84 2.344-1.652.29-.811.29-1.507.203-1.652-.087-.145-.319-.232-.666-.405z" />
    </svg>
  );
}

interface FormData {
  name: string;
  mobile: string;
  address: string;
  pincode: string;
  email: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  address?: string;
  pincode?: string;
  email?: string;
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    name: "",
    mobile: "",
    address: "",
    pincode: "",
    email: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.mobile.trim() || !/^[6-9]\d{9}$/.test(form.mobile.trim()))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.pincode.trim() || !/^\d{6}$/.test(form.pincode.trim()))
      newErrors.pincode = "Enter a valid 6-digit pincode";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      newErrors.email = "Enter a valid email address";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) {
      const msg = `🛍️ *NEW ORDER - Couple Bracelet ❤️*\n\n👤 *Name:* ${form.name}\n📱 *Mobile:* ${form.mobile}\n📧 *Email:* ${form.email}\n🏠 *Address:* ${form.address}\n📍 *Pincode:* ${form.pincode}\n\n💰 *Amount:* ₹149 (Free Delivery)\n✅ Please confirm my order!`;

      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  const simpleWhatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20I%20want%20to%20order%20Couple%20Bracelet%20for%20149`;

  return (
    <div className="min-h-screen bg-background font-body">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="h-1 w-full bg-gradient-to-r from-gold-dark via-gold to-gold-dark" />

        <div className="max-w-lg mx-auto px-4 pt-8 pb-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-body text-muted-foreground tracking-widest uppercase mb-3"
          >
            ✨ Handpicked with Love
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xs sm:max-w-sm mb-6"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-gold/10 to-transparent" />
            <img
              src="/assets/uploads/chatgpt_image_mar_26_2026_07_14_19_pm-019d2a65-0e81-76b5-b9f7-644af445e3de-1.png"
              alt="Couple Bracelet - Black & White with Heart Connector"
              className="w-full rounded-3xl shadow-warm object-cover"
              style={{ maxHeight: 320 }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3"
          >
            Couple Bracelet{" "}
            <span className="inline-block animate-pulse-heart">❤️</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="inline-flex items-center gap-1.5 bg-gold text-accent-foreground font-bold text-lg px-6 py-2 rounded-full shadow-warm mb-4"
          >
            <span>🌟</span>
            <span>Special Offer ₹149 Only</span>
            <span>🌟</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
            className="flex justify-center gap-3 flex-wrap"
          >
            <Badge className="bg-secondary text-secondary-foreground border border-gold/30 px-3 py-1 text-sm font-medium rounded-full">
              📦 Free Delivery
            </Badge>
            <Badge className="bg-secondary text-secondary-foreground border border-gold/30 px-3 py-1 text-sm font-medium rounded-full">
              ⭐ Limited Stock 🌟
            </Badge>
          </motion.div>
        </div>
      </header>

      <main>
        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="max-w-lg mx-auto px-4 mb-8"
          data-ocid="product.section"
        >
          <p className="text-center text-muted-foreground text-base leading-relaxed">
            Beautiful black &amp; white couple bracelet with heart connector.{" "}
            <span className="text-foreground font-medium">
              Perfect gift for couples.
            </span>{" "}
            Made with high-quality materials for lasting wear.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">💝 Pair of 2</span>
            <span className="flex items-center gap-1">🎁 Gift Ready</span>
            <span className="flex items-center gap-1">✅ Cash on Delivery</span>
          </div>
        </motion.section>

        {/* Order Form */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="max-w-lg mx-auto px-4 mb-24"
          data-ocid="order.section"
        >
          <div className="bg-card rounded-2xl shadow-card border border-border p-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-1">
              Order Now
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              Fill in your details and we'll confirm via WhatsApp
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8 space-y-3"
              >
                <div className="text-5xl">✅</div>
                <h3 className="font-display text-xl font-bold text-foreground">
                  Order Submitted!
                </h3>
                <p className="text-muted-foreground text-sm">
                  Your details have been sent to WhatsApp. We'll confirm your
                  order shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      mobile: "",
                      address: "",
                      pincode: "",
                      email: "",
                    });
                  }}
                  className="mt-4 text-sm text-whatsapp underline"
                >
                  Place another order
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Full Name */}
                <div className="space-y-1">
                  <Label htmlFor="name" className="font-medium text-foreground">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    data-ocid="order.name.input"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p
                      data-ocid="order.name.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Mobile */}
                <div className="space-y-1">
                  <Label
                    htmlFor="mobile"
                    className="font-medium text-foreground"
                  >
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobile"
                    data-ocid="order.mobile.input"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.mobile}
                    onChange={(e) => handleChange("mobile", e.target.value)}
                    className={errors.mobile ? "border-destructive" : ""}
                    maxLength={10}
                  />
                  {errors.mobile && (
                    <p
                      data-ocid="order.mobile.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.mobile}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <Label
                    htmlFor="email"
                    className="font-medium text-foreground"
                  >
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    data-ocid="order.email.input"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p
                      data-ocid="order.email.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-1">
                  <Label
                    htmlFor="address"
                    className="font-medium text-foreground"
                  >
                    Delivery Address *
                  </Label>
                  <Textarea
                    id="address"
                    data-ocid="order.address.textarea"
                    placeholder="House No., Street, Area, City"
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    className={`resize-none ${errors.address ? "border-destructive" : ""}`}
                    rows={3}
                  />
                  {errors.address && (
                    <p
                      data-ocid="order.address.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.address}
                    </p>
                  )}
                </div>

                {/* Pincode */}
                <div className="space-y-1">
                  <Label
                    htmlFor="pincode"
                    className="font-medium text-foreground"
                  >
                    Pincode *
                  </Label>
                  <Input
                    id="pincode"
                    data-ocid="order.pincode.input"
                    placeholder="6-digit pincode"
                    value={form.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                    className={errors.pincode ? "border-destructive" : ""}
                    maxLength={6}
                  />
                  {errors.pincode && (
                    <p
                      data-ocid="order.pincode.error_state"
                      className="text-destructive text-xs mt-1"
                    >
                      {errors.pincode}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  data-ocid="order.submit_button"
                  className="w-full flex items-center justify-center gap-2.5 bg-whatsapp hover:bg-whatsapp-dark text-white font-bold text-lg py-4 rounded-2xl shadow-warm transition-all duration-200 active:scale-95 mt-2"
                >
                  <WhatsAppIcon className="w-6 h-6" />
                  Submit Order on WhatsApp
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Your full details will be sent to WhatsApp for order
                  confirmation.
                </p>
              </form>
            )}
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border pb-24">
        <div className="max-w-lg mx-auto px-4 py-6 text-center space-y-2">
          <p className="text-sm font-medium text-foreground">
            📧 mrkhanbaba56@gmail.com
          </p>
          <a
            href={simpleWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-whatsapp hover:text-whatsapp-dark font-medium transition-colors"
            data-ocid="footer.whatsapp.link"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp: +91 9410414884
          </a>
          <p className="text-xs text-muted-foreground pt-2">
            © {new Date().getFullYear()}. Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={simpleWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-ocid="whatsapp.button"
        aria-label="Order on WhatsApp"
        className="fixed bottom-5 right-4 z-50 flex items-center gap-2 bg-whatsapp hover:bg-whatsapp-dark text-white font-semibold text-sm px-4 py-3 rounded-full shadow-warm transition-all duration-200 active:scale-95 hover:scale-105"
      >
        <WhatsAppIcon className="w-5 h-5" />
        <span>Order on WhatsApp</span>
      </a>
    </div>
  );
}
