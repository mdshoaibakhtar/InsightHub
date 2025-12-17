import { FileText, FileImage, FileVideo, FileArchive, File } from 'lucide-react-native';

export const FILE_ICON_MAP = [
  {
    exts: ['jpg', 'jpeg', 'png'],
    Icon: FileImage,
    color: '#a855f7',
  },
  {
    exts: ['mp4'],
    Icon: FileVideo,
    color: '#ef4444',
  },
  {
    exts: ['zip', 'rar', 'tar'],
    Icon: FileArchive,
    color: '#f97316',
  },
  {
    exts: ['txt', 'doc', 'pdf'],
    Icon: FileText,
    color: '#6b7280',
  },
];

// Returns icon component based on file extension
export const getFileIcon = (fileName: string) => {
  if (!fileName) return <File className='w-4 h-4 text-gray-400' />;
  const ext = fileName.split('.').pop()?.toLowerCase();
  const match = FILE_ICON_MAP.find(({ exts }) => exts.includes(ext || ''));
  if (match) {
    const { Icon, color } = match;
    return <Icon className='w-4 h-4' color={color} />;
  }
  return <File className='w-4 h-4 text-gray-400' />;
};
