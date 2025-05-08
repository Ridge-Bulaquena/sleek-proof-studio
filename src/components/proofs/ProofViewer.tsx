
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, MessageCircle, Clock } from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  text: string;
  timestamp: string;
  isCustomer?: boolean;
}

interface ProofViewerProps {
  imageUrl: string;
  comments: Comment[];
  onApprove: () => void;
  onReject: () => void;
  onComment: (comment: string) => void;
}

export const ProofViewer: React.FC<ProofViewerProps> = ({
  imageUrl,
  comments,
  onApprove,
  onReject,
  onComment,
}) => {
  const [comment, setComment] = React.useState('');
  
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      onComment(comment);
      setComment('');
    }
  };
  
  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      <div className="flex-1 glass-card p-6 flex flex-col">
        <div className="bg-muted rounded-lg overflow-hidden flex-1">
          <img
            src={imageUrl || 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5'}
            alt="Proof preview"
            className="w-full h-full object-contain"
          />
        </div>
        
        <div className="mt-6 flex justify-between gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 gap-2 text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
            onClick={onReject}
          >
            <X size={18} />
            <span>Request Changes</span>
          </Button>
          
          <Button 
            size="lg" 
            className="flex-1 gap-2 bg-green-600 hover:bg-green-700 text-white"
            onClick={onApprove}
          >
            <Check size={18} />
            <span>Approve Proof</span>
          </Button>
        </div>
        
        <div className="mt-4 text-sm text-muted-foreground text-center flex items-center justify-center gap-2">
          <Clock size={14} />
          <span>Approval timer: 48 hours remaining</span>
        </div>
      </div>
      
      <div className="lg:w-80 glass-card p-0 flex flex-col h-full">
        <div className="p-4 border-b">
          <h3 className="font-heading font-semibold flex items-center gap-2">
            <MessageCircle size={18} />
            <span>Comments & Feedback</span>
          </h3>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {comments.length === 0 ? (
            <div className="text-center text-muted-foreground py-8">
              <p>No comments yet.</p>
              <p className="text-sm">Be the first to leave feedback.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.map((comment) => (
                <div 
                  key={comment.id} 
                  className={`p-3 rounded-lg ${
                    comment.isCustomer 
                      ? 'bg-primary/10 ml-4' 
                      : 'bg-muted mr-4'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-sm">{comment.author}</span>
                    <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                  </div>
                  <p className="text-sm">{comment.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmitComment} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type your comment..."
              className="flex-1 bg-muted rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button type="submit" size="sm">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
