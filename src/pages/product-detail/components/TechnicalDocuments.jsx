import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TechnicalDocuments = ({ documents }) => {
  const getFileIcon = (fileType) => {
    switch (fileType.toLowerCase()) {
      case 'pdf':
        return 'FileText';
      case 'doc': case'docx':
        return 'FileText';
      case 'xls': case'xlsx':
        return 'FileSpreadsheet';
      case 'zip':
        return 'Archive';
      case 'jpg': case'jpeg': case'png':
        return 'Image';
      case 'mp4': case'avi':
        return 'Video';
      default:
        return 'File';
    }
  };

  const getFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDownload = (document) => {
    // In a real application, this would trigger the actual download
    console.log('Downloading:', document.name);
    // window.open(document.url, '_blank');
  };

  const documentCategories = [
    {
      title: 'Installation Guides',
      icon: 'Wrench',
      documents: documents.filter(doc => doc.category === 'installation')
    },
    {
      title: 'Technical Specifications',
      icon: 'Settings',
      documents: documents.filter(doc => doc.category === 'specifications')
    },
    {
      title: 'Certifications',
      icon: 'Shield',
      documents: documents.filter(doc => doc.category === 'certifications')
    },
    {
      title: 'Maintenance Manuals',
      icon: 'Calendar',
      documents: documents.filter(doc => doc.category === 'maintenance')
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Technical Documents</h2>
        <Button variant="outline" size="sm" iconName="Download" iconPosition="left">
          Download All
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {documentCategories.map((category, categoryIndex) => (
          category.documents.length > 0 && (
            <div key={categoryIndex} className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name={category.icon} size={20} className="text-primary" />
                <h3 className="font-medium text-foreground">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.documents.map((document, docIndex) => (
                  <div key={docIndex} className="flex items-center justify-between p-3 bg-muted/30 rounded-md hover:bg-muted/50 transition-smooth">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <Icon 
                        name={getFileIcon(document.type)} 
                        size={20} 
                        className="text-muted-foreground flex-shrink-0" 
                      />
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-foreground text-sm truncate">
                          {document.name}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span className="uppercase">{document.type}</span>
                          <span>•</span>
                          <span>{getFileSize(document.size)}</span>
                          {document.lastUpdated && (
                            <>
                              <span>•</span>
                              <span>Updated {new Date(document.lastUpdated).toLocaleDateString()}</span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 flex-shrink-0">
                      <button
                        onClick={() => handleDownload(document)}
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-smooth"
                        title="Download"
                      >
                        <Icon name="Download" size={16} />
                      </button>
                      <button
                        className="p-2 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-smooth"
                        title="Preview"
                      >
                        <Icon name="Eye" size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        ))}
      </div>

      {/* Quick Access Downloads */}
      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
        <div className="flex items-center space-x-2 mb-3">
          <Icon name="Zap" size={20} className="text-primary" />
          <span className="font-medium text-foreground">Quick Downloads</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <Button 
            variant="outline" 
            size="sm" 
            fullWidth
            iconName="FileText"
            iconPosition="left"
          >
            Product Datasheet
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            fullWidth
            iconName="Wrench"
            iconPosition="left"
          >
            Installation Guide
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            fullWidth
            iconName="Shield"
            iconPosition="left"
          >
            Safety Certificate
          </Button>
        </div>
      </div>

      {/* Document Request */}
      <div className="text-center p-6 bg-muted/30 rounded-lg">
        <Icon name="FileQuestion" size={32} className="text-muted-foreground mx-auto mb-3" />
        <h3 className="font-medium text-foreground mb-2">Need Additional Documentation?</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Can't find the document you're looking for? Contact our technical support team.
        </p>
        <Button variant="outline" iconName="MessageCircle" iconPosition="left">
          Request Documents
        </Button>
      </div>
    </div>
  );
};

export default TechnicalDocuments;