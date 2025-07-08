'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface Message {
  text: string;
  user: string;
}

interface Connection {
  db: string;
  host: string;
  port: string;
  password: string;
}

interface Schema {
  tables: {
    name: string;
    columns: string[];
  }[];
}

interface AppContextType {
  connection: Connection | null;
  setConnection: React.Dispatch<React.SetStateAction<Connection | null>>;
  schema: Schema | null;
  setSchema: React.Dispatch<React.SetStateAction<Schema | null>>;
  currentOutput: Record<string, any>[];
  setCurrentOutput: React.Dispatch<React.SetStateAction<Record<string, any>[]>>;
  messages: Message[];
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
  addMessage: (msg: Message) => void;
  runQuery: (query: string) => Promise<void>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [connection, setConnection] = useState<Connection | null>(null);
  const [schema, setSchema] = useState<Schema | null>(null);
  const [currentOutput, setCurrentOutput] = useState<Record<string, any>[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (msg: Message) => setMessages(prev => [...prev, msg]);

  const runQuery = async (query: string) => {
    const res = await fetch('/api/runQuery', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ query })
    });
    const json = await res.json();
    setCurrentOutput(json.data);
  };

  // 💾 Load schema & messages on first mount
  useEffect(() => {
    const storedSchema = localStorage.getItem('schema');
    if (storedSchema) {
      setSchema(JSON.parse(storedSchema));
    }
    const storedMessages = localStorage.getItem('messages');
    if (storedMessages) {
      setMessages(JSON.parse(storedMessages));
    }
  }, []);

  // 💾 Persist schema & messages on change
  useEffect(() => {
    if (schema) {
      localStorage.setItem('schema', JSON.stringify(schema));
    }
  }, [schema]);

  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(messages));
  }, [messages]);

  return (
    <AppContext.Provider value={{
      connection, setConnection,
      schema, setSchema,
      currentOutput, setCurrentOutput,
      messages, setMessages, addMessage,
      runQuery
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
