
import React from 'react';
import { useParams } from 'react-router-dom';
import { DashboardHeader } from '@/components/dashboard/DashboardHeader';
import { ProofViewer } from '@/components/proofs/ProofViewer';
import { toast } from 'sonner';

const mockComments = [
  {
    id: '1',
    author: 'John Doe (Designer)',
    text: 'Here\'s the proof for your custom mug design. Let me know if you need any changes!',
    timestamp: '2025-05-06 10:30 AM',
  },
  {
    id: '2',
    author: 'Alex Johnson (Customer)',
    text: 'Could we make the text a bit larger? It looks like it might be hard to read.',
    timestamp: '2025-05-06 11:45 AM',
    isCustomer: true,
  },
  {
    id: '3',
    author: 'John Doe (Designer)',
    text: 'Absolutely! I\'ve increased the font size by 20%. How does it look now?',
    timestamp: '2025-05-06 01:15 PM',
  },
];

const ProofDetail = () => {
  const { proofId } = useParams();
  const [comments, setComments] = React.useState(mockComments);
  
  const handleApprove = () => {
    toast.success("Proof approved successfully!", {
      description: "The production team has been notified and will begin working on your order."
    });
  };
  
  const handleReject = () => {
    toast.info("Changes requested", {
      description: "Please provide specific feedback on what needs to be changed."
    });
  };
  
  const handleComment = (comment: string) => {
    const newComment = {
      id: (comments.length + 1).toString(),
      author: 'You',
      text: comment,
      timestamp: new Date().toLocaleString(),
      isCustomer: true,
    };
    
    setComments([...comments, newComment]);
    
    toast.success("Comment added", {
      description: "Your feedback has been sent to the design team."
    });
  };
  
  React.useEffect(() => {
    document.title = `Proof #${proofId} - SimplerProofs`;
  }, [proofId]);
  
  return (
    <div className="h-screen flex flex-col">
      <DashboardHeader title={`Proof #${proofId}`} />
      
      <div className="p-6 flex-1 overflow-hidden">
        <ProofViewer 
          imageUrl=""
          comments={comments}
          onApprove={handleApprove}
          onReject={handleReject}
          onComment={handleComment}
        />
      </div>
    </div>
  );
};

export default ProofDetail;
