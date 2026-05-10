import React from 'react';
import { useStore } from '../../store/useStore';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, CheckCircle2, X } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function ConfirmModal() {
  const { confirmState, closeConfirm, dontShowConfirmAgainSession, setDontShowConfirmAgainSession } = useStore();

  if (!confirmState) return null;

  const { title, message, onConfirm, confirmText = '確定', type = 'danger' } = confirmState;

  return (
    <AnimatePresence>
      {confirmState.isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeConfirm}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-[#1a1816] border border-[#2a2623] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-start gap-4">
                <div className={cn(
                  "p-3 rounded-xl shrink-0",
                  type === 'danger' ? "bg-red-500/10 text-red-500" : "bg-[#eba96a]/10 text-[#eba96a]"
                )}>
                  {type === 'danger' ? <AlertCircle className="w-6 h-6" /> : <CheckCircle2 className="w-6 h-6" />}
                </div>
                
                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg font-black text-white mb-2">{title}</h3>
                  <p className="text-sm text-[#888] leading-relaxed whitespace-pre-wrap">{message}</p>
                </div>
              </div>

              {type !== 'alert' && !confirmState.hideDontShowAgain && (
                <div className="mt-6 flex items-center gap-3 px-1">
                  <button 
                    onClick={() => setDontShowConfirmAgainSession(!dontShowConfirmAgainSession)}
                    className={cn(
                      "w-5 h-5 rounded border flex items-center justify-center transition-all",
                      dontShowConfirmAgainSession ? "bg-[#eba96a] border-[#eba96a]" : "border-[#333] bg-[#131210]"
                    )}
                  >
                    {dontShowConfirmAgainSession && <X className="w-3.5 h-3.5 text-black" />}
                  </button>
                  <span 
                    className="text-[12px] font-bold text-[#555] cursor-pointer hover:text-[#888] transition-colors select-none"
                    onClick={() => setDontShowConfirmAgainSession(!dontShowConfirmAgainSession)}
                  >
                    不再提醒 (重新整理網頁後重置)
                  </span>
                </div>
              )}
            </div>

            <div className="p-4 bg-[#131210] border-t border-[#2a2623] flex items-center justify-end gap-3">
              {type !== 'alert' && (
                <button 
                  onClick={closeConfirm}
                  className="px-5 py-2.5 rounded-xl text-sm font-bold text-[#888] hover:text-white hover:bg-white/5 transition-all"
                >
                  取消
                </button>
              )}
              <button 
                onClick={() => {
                  onConfirm?.();
                  closeConfirm();
                }}
                className={cn(
                  "px-6 py-2.5 rounded-xl text-sm font-black transition-all shadow-lg active:scale-[0.98]",
                  type === 'danger' 
                    ? "bg-red-500 text-white hover:bg-red-600 shadow-red-500/20" 
                    : (type === 'alert' ? "bg-white text-black hover:bg-gray-200 shadow-white/10" : "bg-[#eba96a] text-black hover:bg-[#f2b985] shadow-[#eba96a]/20")
                )}
              >
                {confirmText}
              </button>
            </div>
            
            <button 
              onClick={closeConfirm}
              className="absolute top-4 right-4 p-2 text-[#444] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
