import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, MessageCircle, Linkedin, Github, Facebook, Send, Youtube  } from "lucide-react";
import Reveal from "../ui/Reveal.jsx";
import SectionLabel from "../ui/SectionLabel.jsx";

function Field({ label, className = "", ...props }) {
  return (
    <div className={className}>
      <label className="mono-label">{label}</label>
      <input
        required
        {...props}
        className="mt-2 w-full rounded-md border border-border bg-surface/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-ink-3 focus:border-primary/60 focus:bg-surface"
      />
    </div>
  );
}

export default function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    // 1. Honeypot check for bots (security trap)
    const botTrap = String(fd.get("bot_check") || "").trim();
    if (botTrap) {
      toast.error("Spam detected.");
      return;
    }

    // 2. Rate Limiting Check (60 seconds cooldown)
    const COOLDOWN_TIME = 10 * 60 * 1000; // 60 seconds
    const lastSubmitTime = localStorage.getItem("contact_last_submit");

    if (lastSubmitTime) {
      const timePassed = Date.now() - parseInt(lastSubmitTime, 10);
      if (timePassed < COOLDOWN_TIME) {
        const remainingSeconds = Math.ceil((COOLDOWN_TIME - timePassed) / 1000);
        return toast.error(`Please wait ${remainingSeconds} second(s) before sending another message.`);
      }
    }

    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();

    if (!name || name.length > 100) return toast.error("Please enter a valid name.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
      return toast.error("Please enter a valid email.");
    if (!msg || msg.length > 1000) return toast.error("Please enter a message (max 1000 chars).");

    setSending(true);

    // Web3Forms Key Append (FormData format)
    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || "14b597b5-492b-4167-83cc-45ccb9322f1a";
    fd.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent. I'll get back to you shortly.");
        // Save submit timestamp for rate limiting
        localStorage.setItem("contact_last_submit", Date.now().toString());
        form.reset();
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("Network error. Could not send message.");
    } finally {
      setSending(false);
    }
  };

  const info = [
    { icon: Mail, label: "Email", value: "mdjakariasheikhmahi@gmail.com", href: "mailto:mdjakariasheikhmahi@gmail.com" },
    { icon: Phone, label: "Phone", value: "+880 1570-222364", href: "tel:+880 1570-222364" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh" },
  ];
  const socials = [
    { icon: Linkedin, href: "https://www.linkedin.com/feed", label: "LinkedIn" },
    { icon: MessageCircle , href: "https://wa.me/message/WY4G277BNEXPL1", label: "WhatsApp" },
    { icon: Facebook, href: "https://www.facebook.com/mdjakariasheikhmahi", label: "Facebook" }, 
    { icon: Youtube , href: "https://www.youtube.com/@MdJakariaSheikhMahi", label: "Youtube" },
    { icon: Github, href: "https://github.com/mdjakariasheikhmahi", label: "GitHub" },
  ];

  return (
    <section id="contact" className="band relative bg-surface/30">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8">
        <Reveal>
          <SectionLabel n="09">Contact</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-16 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.05}>
            <div>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.4rem]">
                Let&apos;s build something <span className="text-primary">solid</span>.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-2">
                Whether you&apos;re an ISP scaling a backbone or a business tightening security,
                tell me about the network you want.
              </p>
              <ul className="mt-10 space-y-4">
                {info.map((it) => (
                  <li key={it.label} className="flex items-center gap-4 border-b border-border pb-4 last:border-0">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md border border-border bg-surface text-primary">
                      <it.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="mono-label text-[0.6rem]!">{it.label}</div>
                      {it.href ? (
                        <a href={it.href} className="text-sm text-foreground hover:text-primary">
                          {it.value}
                        </a>
                      ) : (
                        <div className="text-sm text-foreground">{it.value}</div>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-md border border-border bg-surface text-ink-2 transition hover:border-primary/40 hover:text-primary"
                  >
                    <s.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="rounded-xl border border-border bg-background p-6 sm:p-8">
              {/* Hidden Honeypot Field for Bots */}
              <input type="text" name="bot_check" tabIndex={-1} autoComplete="off" className="hidden" />

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your full name" maxLength={100} />
                <Field label="Your Email" name="email" type="email" placeholder="you@company.com" maxLength={255} />
              </div>
              <Field className="mt-4" label="Subject" name="subject" placeholder="Project or inquiry" maxLength={150} />
              <div className="mt-4">
                <label className="mono-label">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  maxLength={1000}
                  required
                  placeholder="Tell me about your network..."
                  className="mt-2 w-full resize-none rounded-md border border-border bg-surface/60 px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-ink-3 focus:border-primary/60 focus:bg-surface"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-accent-strong disabled:opacity-60"
              >
                {sending ? "Sending..." : (
                  <>
                    Send message <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}