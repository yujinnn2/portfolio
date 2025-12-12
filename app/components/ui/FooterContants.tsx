// components/FooterContacts.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link as LinkIcon, Github, Mail, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/app/lib/utils";

type Props = {
  homepage?: string;
  github?: string;
  email?: string; // 예: "mailto:yujinee111@gmail.com"
  phone?: string; // QR 전용
  className?: string;
};

function PhoneQRModal({
                        open,
                        onClose,
                        tel,
                      }: {
  open: boolean;
  onClose: () => void;
  tel: string;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onMouseDown = (e: MouseEvent) => {
      if (!modalRef.current) return;
      if (!modalRef.current.contains(e.target as Node)) onClose();
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [open]);

  const normalized = tel.replace(/\s|-/g, "");
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=tel:${encodeURIComponent(
    normalized
  )}`;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-6">
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/65"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* modal (톤 통일: 유리감 제거) */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              relative z-[130]
              w-full max-w-[360px]
              rounded-3xl
              border border-black/10 dark:border-white/12
              bg-white dark:bg-[#06091A]
              shadow-[0_22px_70px_rgba(0,0,0,0.25)]
              p-6
            "
          >
            <button
              type="button"
              onClick={onClose}
              className="
                absolute right-4 top-4
                inline-flex h-9 w-9 items-center justify-center
                rounded-full
                bg-black/5 hover:bg-black/10
                dark:bg-white/10 dark:hover:bg-white/15
                text-neutral-700 dark:text-neutral-200
                transition
              "
              aria-label="Close"
            >
              <X className="h-[18px] w-[18px]" />
            </button>

            <div className="text-center">
              <p className="text-[14px] font-semibold text-neutral-900 dark:text-white">
                Phone
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-neutral-500 dark:text-neutral-400">
                모바일로 스캔하면 바로 연결됩니다.
              </p>

              <div className="mt-5 grid place-items-center">
                <div
                  className="
                    rounded-2xl
                    border border-black/10 dark:border-white/12
                    bg-white
                    p-3
                    shadow-[0_12px_30px_rgba(15,23,42,0.10)]
                    dark:bg-white
                  "
                >
                  <img
                    src={qrSrc}
                    alt="전화 QR 코드"
                    className="h-[180px] w-[180px]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              <a
                href={`tel:${normalized}`}
                className="
                  mt-4 inline-flex items-center justify-center
                  rounded-full
                  border border-black/10 dark:border-white/15
                  bg-white dark:bg-white/[0.03]
                  px-5 py-2
                  text-[12px] font-medium
                  text-neutral-800 dark:text-neutral-100
                  transition
                  hover:bg-black/[0.02] dark:hover:bg-white/[0.06]
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15 dark:focus-visible:ring-white/15
                  focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#06091A]
                "
              >
                전화 걸기
              </a>

              <p className="mt-3 text-[11px] text-neutral-400 dark:text-neutral-500">
                (번호는 QR로만 제공)
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function FooterContacts({
                                         homepage = "https://yujinsportfolio.vercel.app/",
                                         github = "https://github.com/yujinnn2",
                                         email = "mailto:yujinee111@gmail.com",
                                         phone = "+8210-5662-6191",
                                         className = "",
                                       }: Props) {
  const [openQR, setOpenQR] = useState(false);
  const isExternal = (href?: string) => !!href && /^https?:\/\//.test(href);

  // ✅ 섹션 톤 통일: bg-white / dark #06091A, 그림자/보더/시인 최소
  const base =
    "group relative grid h-11 w-11 place-items-center rounded-full " +
    "border border-black/10 dark:border-white/12 " +
    "bg-white dark:bg-white/[0.03] " +
    "text-neutral-700 dark:text-neutral-200 " +
    "shadow-[0_10px_26px_rgba(15,23,42,0.06)] dark:shadow-[0_10px_26px_rgba(0,0,0,0.30)] " +
    "transition-[box-shadow,border-color,transform,background-color] duration-200 " +
    "hover:border-black/15 dark:hover:border-white/18 " +
    "hover:bg-black/[0.02] dark:hover:bg-white/[0.05] " +
    "hover:shadow-[0_14px_34px_rgba(15,23,42,0.08)] dark:hover:shadow-[0_14px_34px_rgba(0,0,0,0.38)] " +
    "hover:translate-y-[-1px] active:translate-y-[0px] " +
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/15 dark:focus-visible:ring-white/15 " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#06091A]";

  const items: Array<
    | { href: string; label: string; icon: React.ReactNode; onClick?: never }
    | { href?: never; label: string; icon: React.ReactNode; onClick: () => void }
  > = [
    {
      href: homepage,
      label: "Homepage",
      icon: <LinkIcon className="h-[18px] w-[18px]" />,
    },
    {
      href: github,
      label: "GitHub",
      icon: <Github className="h-[18px] w-[18px]" />,
    },
    {
      href: email,
      label: "Email",
      icon: <Mail className="h-[18px] w-[18px]" />,
    },
    {
      label: "Phone",
      onClick: () => setOpenQR(true),
      icon: <Phone className="h-[18px] w-[18px]" />,
    },
  ];

  return (
    <footer
      className={cn(
        "relative bg-white dark:bg-[#06091A]",
        className
      )}
    >
      {/* ✅ divider 톤 통일 (단색 1px) */}
      <div className="mx-6 h-px bg-black/10 dark:bg-white/12" />

      <div className="px-6 py-7">
        <div className="flex items-center gap-3">
          {items.map((it) => {
            // Button (Phone)
            if ("onClick" in it) {
              const disabled = !phone;
              return (
                <button
                  key={it.label}
                  type="button"
                  onClick={disabled ? undefined : it.onClick}
                  aria-label={it.label}
                  title={disabled ? `${it.label} (미설정)` : it.label}
                  className={cn(base, disabled && "opacity-35 pointer-events-none")}
                >
                  {/* ✅ subtle sheen (톤다운) */}
                  <span
                    aria-hidden
                    className="
                      pointer-events-none absolute inset-0 rounded-full
                      bg-[radial-gradient(closest-side,_rgba(0,0,0,0.06),_transparent)]
                      opacity-0 transition-opacity duration-200
                      group-hover:opacity-[0.10]
                      dark:bg-[radial-gradient(closest-side,_rgba(255,255,255,0.16),_transparent)]
                      dark:group-hover:opacity-[0.12]
                    "
                  />
                  <span className="relative">{it.icon}</span>
                </button>
              );
            }

            // Link
            const disabled = !it.href;
            if (disabled) {
              return (
                <span
                  key={it.label}
                  aria-disabled="true"
                  title={`${it.label} (미설정)`}
                  className={cn(base, "opacity-35 pointer-events-none")}
                >
                  {it.icon}
                  <span className="sr-only">{it.label} (disabled)</span>
                </span>
              );
            }

            return (
              <a
                key={it.label}
                href={it.href}
                target={isExternal(it.href) ? "_blank" : undefined}
                rel={isExternal(it.href) ? "noopener noreferrer" : undefined}
                aria-label={it.label}
                title={it.label}
                className={cn(base)}
              >
                {/* ✅ subtle sheen (톤다운) */}
                <span
                  aria-hidden
                  className="
                    pointer-events-none absolute inset-0 rounded-full
                    bg-[radial-gradient(closest-side,_rgba(0,0,0,0.06),_transparent)]
                    opacity-0 transition-opacity duration-200
                    group-hover:opacity-[0.10]
                    dark:bg-[radial-gradient(closest-side,_rgba(255,255,255,0.16),_transparent)]
                    dark:group-hover:opacity-[0.12]
                  "
                />
                <span className="relative">{it.icon}</span>
              </a>
            );
          })}
        </div>

        <p className="mt-4 text-[11px] text-neutral-400 dark:text-neutral-500">
          © 2025 YUJIN
        </p>
      </div>

      {/* Phone QR Modal */}
      {phone && (
        <PhoneQRModal open={openQR} onClose={() => setOpenQR(false)} tel={phone} />
      )}
    </footer>
  );
}
