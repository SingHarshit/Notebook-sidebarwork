'use client'
import React from 'react';
import Sidebar from '@/components/Sidebar';
import QueryOutput from '@/components/Output/QueryOutput';
import ChatWindow from '@/components/Chat/ChatWindow';
import { useAppContext } from '@/contexts/AppContext';

export default function NotebookPage() {
  const { currentOutput, messages } = useAppContext();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-4 overflow-auto">
        {currentOutput && <QueryOutput data={currentOutput} />}
        {messages.length > 0 && <ChatWindow />}
      </div>
    </div>
  );
}
