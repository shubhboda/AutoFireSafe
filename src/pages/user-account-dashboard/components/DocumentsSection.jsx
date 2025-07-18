import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const DocumentsSection = ({ documents, onDownload, onRequestDocument }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categoryOptions = [
    { value: 'all', label: 'All Documents' },
    { value: 'certificates', label: 'Certificates' },
    { value: 'warranties', label: 'Warranties' },
    { value: 'maintenance', label: 'Maintenance Records' },
    { value: 'invoices', label: 'Invoices' },
    { value: 'compliance', label: 'Compliance Reports' }
  ];

  const getDocumentIcon = (type) => {
    switch (type) {
      case 'certificate': return 'Award';
      case 'warranty': return 'Shield';
      case 'maintenance': return 'Wrench';
      case 'invoice': return 'Receipt';
      case 'compliance': return 'FileCheck';
      default: return 'FileText';
    }
  };

  const getDocumentColor = (type) => {
    switch (type) {
      case 'certificate': return 'text-success bg-success/10';
      case 'warranty': return 'text-primary bg-primary/10';
      case 'maintenance': return 'text-warning bg-warning/10';
      case 'invoice': return 'text-secondary bg-secondary/10';
      case 'compliance': return 'text-destructive bg-destructive/10';
      default: return 'text-muted-foreground bg-muted';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-soft">
      <div className="p-6 border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
          <h2 className="text-lg font-semibold text-foreground">Documents & Certificates</h2>
          <Button
            variant="outline"
            size="sm"
            iconName="Plus"
            iconPosition="left"
            onClick={onRequestDocument}
          >
            Request Document
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            type="search"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Select
            options={categoryOptions}
            value={categoryFilter}
            onChange={setCategoryFilter}
            placeholder="Filter by category"
          />
        </div>
      </div>
      
      <div className="p-6">
        {filteredDocuments.length === 0 ? (
          <div className="text-center py-8">
            <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">No documents found</p>
            <Button
              variant="outline"
              onClick={onRequestDocument}
              iconName="Plus"
              iconPosition="left"
            >
              Request Your First Document
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredDocuments.map((document) => (
              <div key={document.id} className="border border-border rounded-lg p-4 hover:shadow-soft transition-smooth">
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getDocumentColor(document.type)}`}>
                    <Icon name={getDocumentIcon(document.type)} size={20} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground truncate">{document.name}</h3>
                      {document.isExpiring && (
                        <span className="text-xs bg-warning/10 text-warning px-2 py-1 rounded-full whitespace-nowrap ml-2">
                          Expiring Soon
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-3">{document.description}</p>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={12} />
                        <span>Issued: {formatDate(document.issuedDate)}</span>
                      </div>
                      {document.expiryDate && (
                        <div className="flex items-center space-x-1">
                          <Icon name="Clock" size={12} />
                          <span>Expires: {formatDate(document.expiryDate)}</span>
                        </div>
                      )}
                      <div className="flex items-center space-x-1">
                        <Icon name="File" size={12} />
                        <span>{document.format.toUpperCase()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="HardDrive" size={12} />
                        <span>{formatFileSize(document.size)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className={`w-2 h-2 rounded-full ${
                          document.status === 'valid' ? 'bg-success' :
                          document.status === 'expiring'? 'bg-warning' : 'bg-destructive'
                        }`}></span>
                        <span className="text-xs text-muted-foreground capitalize">
                          {document.status}
                        </span>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="text-muted-foreground hover:text-foreground transition-smooth">
                          <Icon name="Eye" size={14} />
                        </button>
                        <button className="text-muted-foreground hover:text-foreground transition-smooth">
                          <Icon name="Share" size={14} />
                        </button>
                        <button
                          onClick={() => onDownload(document.id)}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          <Icon name="Download" size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentsSection;