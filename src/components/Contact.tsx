"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Send, Check, ChevronDown } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

type Status = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  projectType: string;
};

type FieldErrors = Partial<Record<keyof FormData, string>>;
type FieldTouched = Partial<Record<keyof FormData, boolean>>;

function validate(name: keyof FormData, value: string): string {
  switch (name) {
    case "name":
      return value.trim().length < 2 ? "Nom requis (min. 2 caractères)" : "";
    case "email":
      return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Email invalide" : "";
    case "message":
      return value.trim().length < 10 ? "Message trop court (min. 10 caractères)" : "";
    default:
      return "";
  }
}

const baseInput =
  "w-full rounded-xl px-4 py-3 text-foreground focus:outline-none transition-all duration-200 text-sm bg-black/5 dark:bg-white/5 border placeholder:text-muted";

function fieldClass(
  name: keyof FormData,
  form: FormData,
  errors: FieldErrors,
  touched: FieldTouched
): string {
  const isError = touched[name] && errors[name];
  const isValid = touched[name] && !errors[name] && form[name];
  if (isError)
    return `${baseInput} border-red-500/60 bg-red-500/5 dark:bg-red-500/5 focus:border-red-500/60`;
  if (isValid) return `${baseInput} border-green-500/50 focus:border-green-500/50`;
  return `${baseInput} border-black/10 dark:border-white/10 focus:border-accent/50 focus:bg-accent/5 dark:focus:bg-accent/5`;
}

const projectTypeOptions = [
  { value: "vitrine", label: "Site vitrine" },
  { value: "webapp", label: "Application web" },
  { value: "outil", label: "Outil interne" },
  { value: "automation", label: "Automation IA" },
  { value: "autre", label: "Autre" },
];

const budgetOptions = [
  { value: "<1000", label: "Moins de 1 000€" },
  { value: "1000-3000", label: "1 000 – 3 000€" },
  { value: "3000-5000", label: "3 000 – 5 000€" },
  { value: "5000+", label: "5 000€+" },
];

function CustomSelect({
  name,
  value,
  options,
  placeholder,
  triggerClass,
  onChange,
  onBlur,
}: {
  name: string;
  value: string;
  options: { value: string; label: string }[];
  placeholder: string;
  triggerClass: string;
  onChange: (name: string, value: string) => void;
  onBlur: (name: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [open]);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onBlur={() => {
          if (!open) onBlur(name);
        }}
        className={`${triggerClass} flex items-center justify-between gap-2 cursor-pointer`}
      >
        <span className={value ? "text-foreground" : "text-muted"}>
          {selectedLabel ?? placeholder}
        </span>
        <ChevronDown
          size={15}
          className={`text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute z-50 top-full left-0 right-0 mt-1.5 rounded-xl border border-accent/30 overflow-hidden shadow-xl"
            style={{ backgroundColor: "var(--background)" }}
          >
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  onChange(name, opt.value);
                  onBlur(name);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-150 ${
                  value === opt.value
                    ? "bg-accent text-white font-medium"
                    : "text-foreground hover:bg-accent/10"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    projectType: "",
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<FieldTouched>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors((err) => ({
        ...err,
        [name]: validate(name as keyof FormData, value),
      }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({
      ...err,
      [name]: validate(name as keyof FormData, value),
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (touched[name as keyof FormData]) {
      setErrors((err) => ({ ...err, [name]: validate(name as keyof FormData, value) }));
    }
  };

  const handleSelectBlur = (name: string) => {
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors((err) => ({
      ...err,
      [name]: validate(name as keyof FormData, form[name as keyof FormData]),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched: FieldTouched = { name: true, email: true, message: true };
    setTouched((t) => ({ ...t, ...allTouched }));
    const newErrors: FieldErrors = {
      name: validate("name", form.name),
      email: validate("email", form.email),
      message: validate("message", form.message),
    };
    setErrors(newErrors);
    if (Object.values(newErrors).some((e) => e)) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setForm({ name: "", email: "", subject: "", message: "", budget: "", projectType: "" });
    setErrors({});
    setTouched({});
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest">
              Travaillons ensemble
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2 text-foreground">
              Contact
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              Un projet en tête ? Décrivez-le moi, je vous réponds sous 48h.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: info */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3 shrink-0">
                  <Mail size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Email</p>
                  <a
                    href="mailto:contact@gregodev.com"
                    className="text-muted hover:text-accent-light text-sm transition-colors"
                  >
                    contact@gregodev.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3 shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Téléphone</p>
                  <a
                    href="tel:0658936788"
                    className="text-muted hover:text-accent-light text-sm transition-colors"
                  >
                    06 58 93 67 88
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-accent/10 p-3 shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-semibold text-sm">Localisation</p>
                  <p className="text-muted text-sm">Bordeaux, France · 100% Remote</p>
                </div>
              </div>

              <div className="mt-4 p-6 rounded-2xl card-border bg-black/[0.03] dark:bg-white/[0.02]">
                <p className="text-foreground font-semibold mb-2">Disponibilité</p>
                <p className="text-muted text-sm leading-relaxed">
                  Je prends en charge un nombre limité de projets par mois pour garantir une
                  qualité optimale. Contactez-moi pour connaître mes disponibilités actuelles.
                </p>
              </div>
            </motion.div>

            {/* Right: form or success */}
            <motion.div variants={fadeInUp}>
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center py-20 text-center gap-6"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center"
                    >
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.35, type: "spring", stiffness: 260, damping: 20 }}
                      >
                        <Check size={36} className="text-green-400" />
                      </motion.div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <h3 className="text-foreground font-bold text-2xl mb-2">
                        Message envoyé !
                      </h3>
                      <p className="text-muted">Je vous répondrai dans les 48h.</p>
                    </motion.div>

                    <motion.button
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      onClick={resetForm}
                      className="text-accent hover:text-accent-light text-sm underline underline-offset-4 transition-colors"
                    >
                      Envoyer un autre message
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4"
                    noValidate
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1">
                        <input
                          type="text"
                          name="name"
                          placeholder="Votre nom"
                          required
                          value={form.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={fieldClass("name", form, errors, touched)}
                        />
                        {touched.name && errors.name && (
                          <p className="text-red-400 text-xs px-1">{errors.name}</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <input
                          type="email"
                          name="email"
                          placeholder="Votre email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={fieldClass("email", form, errors, touched)}
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-400 text-xs px-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Type de projet + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <CustomSelect
                        name="projectType"
                        value={form.projectType}
                        options={projectTypeOptions}
                        placeholder="Type de projet"
                        triggerClass={fieldClass("projectType", form, errors, touched)}
                        onChange={handleSelectChange}
                        onBlur={handleSelectBlur}
                      />
                      <CustomSelect
                        name="budget"
                        value={form.budget}
                        options={budgetOptions}
                        placeholder="Budget estimé"
                        triggerClass={fieldClass("budget", form, errors, touched)}
                        onChange={handleSelectChange}
                        onBlur={handleSelectBlur}
                      />
                    </div>

                    {/* Sujet */}
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet"
                      value={form.subject}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={fieldClass("subject", form, errors, touched)}
                    />

                    {/* Message */}
                    <div className="flex flex-col gap-1">
                      <textarea
                        name="message"
                        placeholder="Décrivez votre projet..."
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`${fieldClass("message", form, errors, touched)} resize-none`}
                      />
                      {touched.message && errors.message && (
                        <p className="text-red-400 text-xs px-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className={`flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 ${
                        status === "error"
                          ? "bg-red-600/20 border border-red-500/30 text-red-400"
                          : "bg-accent text-white shadow-glow hover:bg-accent/90 disabled:opacity-70 disabled:cursor-not-allowed"
                      }`}
                    >
                      {status === "loading" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours...
                        </>
                      ) : status === "error" ? (
                        "⚠ Erreur — Réessayez"
                      ) : (
                        <>
                          <Send size={16} />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
