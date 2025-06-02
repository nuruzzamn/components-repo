import Button1 from "./_components/Button1";
import Button2 from "./_components/Button2";
import Button3 from "./_components/Button3";
import Button4 from "./_components/Button4";
import Button5 from "./_components/Button5";
import Button6 from "./_components/Button6";
import Button7 from "./_components/Button7";
import Button8 from "./_components/Button8";
import Button9 from "./_components/Button9";
import Button10 from "./_components/Button10";
import Button11 from "./_components/Button11";
import Button12 from "./_components/Button12";
import Button13 from "./_components/Button13";
import Button14 from "./_components/Button14";
import Button15 from "./_components/Button15";
import Button16 from "./_components/Button16";
import Button17 from "./_components/Button17";
import Button18 from "./_components/Button18";
import Button19 from "./_components/Button19";
import Button20 from "./_components/Button20";
import Button21 from "./_components/Button21";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">Button Design Collection</h1>

        {/* Button Details */}
        <div className="mt-12 grid grid-cols-1 gap-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">All Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-2">
              <Button1 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Gradient with Shine Effect</p>
            </div>
            <div className="space-y-2">
              <Button2 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Emerald with Arrow</p>
            </div>
            <div className="space-y-2">
              <Button3 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Border Fill Effect</p>
            </div>
            <div className="space-y-2">
              <Button4 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Neumorphic Design</p>
            </div>
            <div className="space-y-2">
              <Button5 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Glowing Pulse</p>
            </div>
            <div className="space-y-2">
              <Button6 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">3D Press Effect</p>
            </div>
            <div className="space-y-2">
              <Button7 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Glass Morphism</p>
            </div>
            <div className="space-y-2">
              <Button8 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Professional CTA</p>
            </div>
            <div className="space-y-2">
              <Button9 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Modern Outline</p>
            </div>
            <div className="space-y-2">
              <Button10 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Loading State</p>
            </div>
            <div className="space-y-2">
              <Button11 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Premium Features</p>
            </div>

             <div className="space-y-2">
              <Button12 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Enterprise</p>
            </div>

             <div className="space-y-2">
              <Button13 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Premium</p>
            </div>

             <div className="space-y-2">
              <Button14 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Learn more</p>
            </div>

             <div className="space-y-2">
              <Button15 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Confirm</p>
            </div>

             <div className="space-y-2">
              <Button16 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Dashboard</p>
            </div>

             <div className="space-y-2">
              <Button17 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Delete</p>
            </div>

             <div className="space-y-2">
              <Button18 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Upgrade to pro</p>
            </div>

            <div className="space-y-2">
              <Button19 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Save changes</p>
            </div>

            <div className="space-y-2">
              <Button20 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Settings</p>
            </div>

            <div className="space-y-2">
              <Button21 />
              <p className="text-sm text-center text-gray-600 dark:text-gray-400 mt-2">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
