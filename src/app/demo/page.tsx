import { FileTree } from "@/components";
import { demoFileTree } from "@/constants/fileTrees";

export default function DemoPage() {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">File Tree Status Demo</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">File Tree with Status Indicators</h2>
            <div className="h-96 border rounded-lg">
              <FileTree files={demoFileTree} defaultOpen={['app']} />
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-4">Status Legend</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="bg-green-500 text-white text-xs px-2 py-1 rounded font-medium">N</span>
                <span>New files/folders</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded font-medium">M</span>
                <span>Modified files/folders</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-medium">D</span>
                <span>Deleted files/folders</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded font-medium">U</span>
                <span>Untracked files/folders</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded font-medium">S</span>
                <span>Staged files/folders</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Color-coded status indicators</li>
                <li>• Status dots and labels</li>
                <li>• Text color changes based on status</li>
                <li>• Support for both files and folders</li>
                <li>• Customizable side components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 