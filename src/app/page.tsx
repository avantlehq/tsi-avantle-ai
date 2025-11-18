export default function BackendServicePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-blue-100 border border-blue-200 rounded-lg p-8 mb-6">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            TSI Backend Service
          </h1>
          <p className="text-blue-700 mb-6">
            European Railway Data Conversion API
          </p>
          <div className="bg-white rounded-lg p-6 mb-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              Service Status
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-green-700 font-medium">Online</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              API Endpoints
            </h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/v1/convert</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/v1/validate</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">GET /api/v1/status</code></li>
              <li><code className="bg-gray-100 px-2 py-1 rounded">POST /api/provision</code></li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Supported Formats
            </h3>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              <li>• EDIFACT (SKDUPD/TSDUPD)</li>
              <li>• GTFS Export</li>
              <li>• JSON Transport Data</li>
              <li>• XSD Validation</li>
            </ul>
          </div>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <p className="text-yellow-800 text-sm">
            <strong>Internal Service:</strong> This backend service supports the TSI Directory platform. 
            For the public interface, visit <a href="https://tsi.directory" className="text-blue-600 hover:underline">tsi.directory</a>
          </p>
        </div>
      </div>
    </div>
  );
}
