import { useState } from "react";
import { Upload, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DocumentUpload = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    setUploadedFiles(prev => [...prev, ...files.map(f => f.name)]);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles(prev => [...prev, ...files.map(f => f.name)]);
  };

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Upload Study Materials</h3>
      
      <div 
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-300 ${
          isDragOver 
            ? 'border-primary bg-primary/5' 
            : 'border-border hover:border-primary/50 hover:bg-muted/50'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-lg font-medium mb-2">Drop your files here</p>
        <p className="text-muted-foreground mb-4">or click to browse</p>
        <input
          type="file"
          multiple
          accept=".pdf,.txt,.docx"
          className="hidden"
          id="file-upload"
          onChange={handleFileInput}
        />
        <Button asChild variant="outline">
          <label htmlFor="file-upload" className="cursor-pointer">
            Choose Files
          </label>
        </Button>
        <p className="text-xs text-muted-foreground mt-2">
          Supports PDF, TXT, DOCX files
        </p>
      </div>

      {uploadedFiles.length > 0 && (
        <div className="mt-6">
          <h4 className="font-medium mb-2">Uploaded Files</h4>
          <div className="space-y-2">
            {uploadedFiles.map((filename, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-muted/50 rounded-md">
                <FileText className="h-4 w-4 text-primary" />
                <span className="flex-1 text-sm">{filename}</span>
                <CheckCircle className="h-4 w-4 text-secondary" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};

export default DocumentUpload;