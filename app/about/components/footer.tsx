import { getYearDisplay } from '@/lib/utils';

export default function Footer() {
  const { startYear } = { startYear: 2025 };
  const yearDisplay = getYearDisplay(startYear);

  return (
    <footer className='bg-background border-t border-t-neutral-700'>
      <div className='flex items-center justify-center mx-auto text-muted-foreground h-16 px-4'>
        <p className="text-base">
          Portfolio © {yearDisplay} - tjktakbuonngu
        </p>
      </div>
    </footer>
  );
}
