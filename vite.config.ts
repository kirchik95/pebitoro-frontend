import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    server: {
      port: parseInt(env.VITE_PORT) || 5173,
    },
    define: {
      'process.env': env,
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]--[hash:base64:5]',
      },
    },
    plugins: [
      react(),
      tsconfigPaths(),
      checker({
        overlay: env.VITE_OVERLAY === 'true',
        typescript: true,
        eslint: {
          useFlatConfig: true,
          lintCommand: 'eslint "./src/**/*.{ts, tsx}"',
        },
      }),
    ],
  };
});
