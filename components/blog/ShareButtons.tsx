import { useRouter } from 'next/navigation';
import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';

interface ShareButtonsProps {
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ title }) => {
  const router = useRouter();
  const url = typeof window !== 'undefined' ? window.location.href : '';

  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  const linkedinShareUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`;

  return (
    <div className="flex items-center space-x-4">
      <p className="text-lg font-semibold">Share this article:</p>
      <a href={twitterShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
        <FaTwitter className="w-6 h-6 text-gray-600 hover:text-primary-500 transition-colors" />
      </a>
      <a href={facebookShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
        <FaFacebook className="w-6 h-6 text-gray-600 hover:text-primary-700 transition-colors" />
      </a>
      <a href={linkedinShareUrl} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
        <FaLinkedin className="w-6 h-6 text-gray-600 hover:text-primary-600 transition-colors" />
      </a>
    </div>
  );
};

export default ShareButtons;
