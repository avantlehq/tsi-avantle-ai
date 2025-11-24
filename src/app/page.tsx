import { CheckCircle, Database, Zap, Settings, ArrowRight, Server } from 'lucide-react'
import Link from 'next/link'

export default function BackendServicePage() {
  return (
    <div className="min-h-screen avantle-gradient">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex justify-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg avantle-border">
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'var(--color-green)' }}></div>
              <span className="text-muted-foreground text-sm font-medium">Service Online</span>
            </div>
            <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg avantle-border">
              <Server className="w-3 h-3" style={{ color: 'var(--color-blue)' }} />
              <span className="text-muted-foreground text-sm font-medium">Internal API</span>
            </div>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light tracking-tight mb-8 text-foreground">
            TSI Backend Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light leading-relaxed">
            European Railway Data Conversion API<br/>
            Internal service powering the TSI Directory platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://tsi.directory" 
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity avantle-glow">
              <ArrowRight className="w-5 h-5" />
              Visit TSI Directory
            </Link>
          </div>
        </div>

        {/* API Endpoints */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="avantle-border bg-card/50 backdrop-blur-sm border-l-4 shadow-sm hover:shadow-md transition-shadow rounded-lg p-6"
               style={{ borderLeftColor: `rgb(74 144 226 / var(--border-opacity))` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" 
                   style={{ backgroundColor: `rgb(74 144 226 / var(--icon-opacity))` }}>
                <Database className="h-6 w-6" style={{ color: 'var(--color-blue)' }} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">API Endpoints</h3>
            </div>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center gap-3">
                <code className="bg-muted px-3 py-1 rounded font-mono text-sm">POST</code>
                <span className="font-medium">/api/v1/convert</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-muted px-3 py-1 rounded font-mono text-sm">POST</code>
                <span className="font-medium">/api/v1/validate</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-muted px-3 py-1 rounded font-mono text-sm">GET</code>
                <span className="font-medium">/api/v1/status</span>
              </div>
              <div className="flex items-center gap-3">
                <code className="bg-muted px-3 py-1 rounded font-mono text-sm">POST</code>
                <span className="font-medium">/api/provision</span>
              </div>
            </div>
          </div>

          <div className="avantle-border bg-card/50 backdrop-blur-sm border-l-4 shadow-sm hover:shadow-md transition-shadow rounded-lg p-6"
               style={{ borderLeftColor: `rgb(245 166 35 / var(--border-opacity))` }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg" 
                   style={{ backgroundColor: `rgb(245 166 35 / var(--icon-opacity))` }}>
                <Settings className="h-6 w-6" style={{ color: 'var(--color-orange)' }} />
              </div>
              <h3 className="text-lg font-semibold text-card-foreground">Supported Formats</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-orange)' }}></div>
                <span>EDIFACT (SKDUPD/TSDUPD)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-orange)' }}></div>
                <span>GTFS Export</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-orange)' }}></div>
                <span>JSON Transport Data</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-orange)' }}></div>
                <span>XSD Validation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Service Status */}
        <div className="max-w-4xl mx-auto">
          <div className="avantle-border bg-card/50 backdrop-blur-sm border-l-4 shadow-sm rounded-lg p-6"
               style={{ borderLeftColor: `rgb(126 211 33 / var(--border-opacity))` }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg" 
                     style={{ backgroundColor: `rgb(126 211 33 / var(--icon-opacity))` }}>
                  <CheckCircle className="h-8 w-8" style={{ color: 'var(--color-green)' }} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">Service Status: Online</h3>
                  <p className="text-muted-foreground">
                    Internal API service supporting the TSI Directory platform.
                  </p>
                </div>
              </div>
              <Link href="https://tsi.directory" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium">
                Visit Public Interface →
              </Link>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground font-light">
            TSI Backend Service • European Railway Data Conversion API
          </p>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Internal service. For public access, visit tsi.directory
          </p>
        </div>
      </div>
    </div>
  )
}
