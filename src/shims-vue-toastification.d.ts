declare module 'vue-toastification' {
    import { Plugin } from 'vue';
    const Toast: Plugin;
    export default Toast;
    export function useToast(): {
      success(message: string, options?: any): void;
      error(message: string, options?: any): void;
      info(message: string, options?: any): void;
      warning(message: string, options?: any): void;
    };
  }
  