'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { TechItem } from './types';
import { DEFAULT_CATEGORY_COLORS } from './types';
import { getLogoSrc, getMonogram } from './skill-logo';

function splitExperience(text: string): string[] {
  return text
    .split(/\.\s+|;\s+/)
    .map(s => s.trim())
    .filter(s => s.length > 0)
    .map(s => {
      const ended = s.endsWith('.') ? s : s + '.';
      return ended.charAt(0).toUpperCase() + ended.slice(1);
    });
}

export interface InfoPanelProps {
  item: TechItem | null;
  onClose: () => void;
  categoryColors?: Record<string, string>;
  logoOverrides?: Record<string, string>;
}

export default function InfoPanel({ item, onClose, categoryColors, logoOverrides }: InfoPanelProps) {
  const colors = { ...DEFAULT_CATEGORY_COLORS, ...categoryColors };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key={item.slug}
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 32 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column' }}
        >
          <div style={{
            flex: 1,
            minHeight: 0,
            background: '#ffffff',
            border: '1px solid rgba(220, 212, 198, 0.7)',
            borderRadius: 24,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 8px 30px rgba(26, 18, 11, 0.04)',
          }}>

            {/* Category accent bar */}
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 4,
              background: colors[item.category] ?? 'var(--gold-primary, #b37d22)',
              borderRadius: '24px 0 0 24px',
            }} />

            {/* Header */}
            <div style={{ flexShrink: 0, padding: '24px 24px 20px 32px', position: 'relative' }}>
              <button
                onClick={onClose}
                aria-label="Close panel"
                style={{
                  position: 'absolute',
                  top: 18, right: 18,
                  background: 'transparent',
                  border: '1px solid rgba(220, 212, 198, 0.6)',
                  borderRadius: 8,
                  width: 32, height: 32,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#8c8070',
                  transition: 'all 150ms ease',
                }}
                onMouseEnter={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = '#1a120b';
                  b.style.borderColor = 'var(--gold-primary, #b37d22)';
                  b.style.background = 'rgba(179,125,34,0.05)';
                }}
                onMouseLeave={e => {
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.color = '#8c8070';
                  b.style.borderColor = 'rgba(220, 212, 198, 0.6)';
                  b.style.background = 'transparent';
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <line x1="1" y1="1" x2="9" y2="9" />
                  <line x1="9" y1="1" x2="1" y2="9" />
                </svg>
              </button>

              <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12,
                  background: '#ffffff',
                  border: '1px solid rgba(220, 212, 198, 0.5)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 4px 15px rgba(26, 18, 11, 0.05)',
                }}>
                  <LogoOrMonogram item={item} size={28} logoOverrides={logoOverrides} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: colors[item.category] ?? 'var(--gold-primary, #b37d22)',
                    marginBottom: 4,
                    lineHeight: 1,
                  }}>
                    {item.category}
                  </div>
                  <h3 style={{
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#1a120b',
                    margin: 0,
                    lineHeight: 1.1,
                  }}>
                    {item.name}
                  </h3>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{
              height: 1,
              background: 'rgba(220, 212, 198, 0.5)',
              marginLeft: 32,
              marginRight: 24,
              flexShrink: 0,
            }} />

            {/* Scrollable content */}
            <div style={{
              flex: 1, minHeight: 0, overflowY: 'auto',
              padding: '20px 24px 24px 32px',
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              <InfoRow label="What it is" text={item.description} />
              {item.whyUsed && <InfoRow label="Why we use it" text={item.whyUsed} />}
              {item.myExperience && (
                <ExperienceRow
                  label="Our Experience"
                  text={item.myExperience}
                  accentColor={colors[item.category] ?? 'var(--gold-primary, #b37d22)'}
                />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function InfoRow({ label, text }: { label: string; text: string }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: '#8c8070',
        marginBottom: 6,
      }}>
        {label}
      </div>
      <p style={{
        fontSize: '0.88rem',
        lineHeight: 1.6,
        color: '#4a3f35',
        margin: 0,
      }}>
        {text}
      </p>
    </div>
  );
}

function ExperienceRow({ label, text, accentColor }: { label: string; text: string; accentColor: string }) {
  const sentences = splitExperience(text);

  return (
    <div style={{ textAlign: 'left' }}>
      <div style={{
        fontSize: '0.72rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: accentColor,
        marginBottom: 9,
      }}>
        {label}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {sentences.map((sentence, i) => (
          <div
            key={i}
            style={{
              position: 'relative',
              paddingLeft: 14, paddingTop: 8, paddingBottom: 8, paddingRight: 8,
              background: 'rgba(179,125,34,0.03)',
              borderRadius: '0 8px 8px 0',
              overflow: 'hidden',
            }}
          >
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 3,
              background: accentColor,
              opacity: 0.8,
            }} />
            <p style={{
              fontSize: '0.85rem',
              lineHeight: 1.55,
              color: '#4a3f35',
              margin: 0,
            }}>
              {sentence}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function LogoOrMonogram({ item, size, logoOverrides }: { item: TechItem; size: number; logoOverrides?: Record<string, string> }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#1a120b', letterSpacing: '0.04em' }}>
        {getMonogram(item.name)}
      </span>
    );
  }
  return (
    <img
      src={getLogoSrc(item.slug, logoOverrides)}
      alt={item.name}
      style={{ width: size, height: size, display: 'block' }}
      onError={() => setError(true)}
      draggable={false}
    />
  );
}
