/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { io } from "socket.io-client";
import { useChatRoomDetail } from "./quries";

export function useChat() {
  const { id } = useParams();
  const socket = io("http://10.11.106.212:3002");

  const ref = useRef<HTMLDivElement>(null);

  if (!id) throw new Error("No chat room id");

  const { data, isLoading } = useChatRoomDetail(id);

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }

    if (data) {
      setMessages(data?.messages || []);

      socket.on("connect", () => {
        socket.emit("connected", { channel: id });
      });

      socket.on("connected", ({ channel }: { channel: string }) => {
        console.log(channel);
      });

      socket.on("sendMessage", (message: Message) => {
        setMessages((prev) => [...prev, message]);
      });
    }

    return () => {
      socket.disconnect();
    };
  }, [data]);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current);

      ref.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  return {
    ref,
    isLoading,
    data,
    socket,
    messages,
  };
}
