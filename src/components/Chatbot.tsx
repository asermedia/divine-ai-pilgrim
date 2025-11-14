import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, X, Send } from "lucide-react";

const languages = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी (Hindi)" },
  { value: "ta", label: "தமிழ் (Tamil)" },
  { value: "te", label: "తెలుగు (Telugu)" },
  { value: "kn", label: "ಕನ್ನಡ (Kannada)" },
  { value: "ml", label: "മലയാളം (Malayalam)" },
  { value: "mr", label: "मराठी (Marathi)" },
  { value: "bn", label: "বাংলা (Bengali)" },
];

const translations: Record<string, {
  title: string;
  placeholder: string;
  welcome: string;
  userQuestion: string;
  botResponse: string;
}> = {
  en: {
    title: "UPOS Assistant",
    placeholder: "Type your message...",
    welcome: "Welcome to UPOS! How can I assist you today?",
    userQuestion: "What services do you offer?",
    botResponse: "We offer temple darshan booking, online donations, prasadam delivery, and more!"
  },
  hi: {
    title: "यूपीओएस सहायक",
    placeholder: "अपना संदेश लिखें...",
    welcome: "यूपीओएस में आपका स्वागत है! मैं आज आपकी कैसे सहायता कर सकता हूं?",
    userQuestion: "आप कौन सी सेवाएं प्रदान करते हैं?",
    botResponse: "हम मंदिर दर्शन बुकिंग, ऑनलाइन दान, प्रसाद वितरण और अधिक प्रदान करते हैं!"
  },
  ta: {
    title: "UPOS உதவியாளர்",
    placeholder: "உங்கள் செய்தியை உள்ளிடவும்...",
    welcome: "UPOS இல் உங்களை வரவேற்கிறோம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
    userQuestion: "நீங்கள் என்ன சேவைகளை வழங்குகிறீர்கள்?",
    botResponse: "நாங்கள் கோவில் தரிசன பதிவு, ஆன்லைன் நன்கொடை, பிரசாதம் விநியோகம் மற்றும் பலவற்றை வழங்குகிறோம்!"
  },
  te: {
    title: "UPOS సహాయకుడు",
    placeholder: "మీ సందేశాన్ని టైప్ చేయండి...",
    welcome: "UPOS కి స్వాగతం! నేను ఈరోజు మీకు ఎలా సహాయం చేయగలను?",
    userQuestion: "మీరు ఏ సేవలను అందిస్తారు?",
    botResponse: "మేము టెంపుల్ దర్శన బుకింగ్, ఆన్‌లైన్ విరాళాలు, ప్రసాదం డెలివరీ మరియు మరిన్ని అందిస్తాము!"
  },
  kn: {
    title: "UPOS ಸಹಾಯಕ",
    placeholder: "ನಿಮ್ಮ ಸಂದೇಶವನ್ನು ಟೈಪ್ ಮಾಡಿ...",
    welcome: "UPOS ಗೆ ಸ್ವಾಗತ! ನಾನು ಇಂದು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
    userQuestion: "ನೀವು ಯಾವ ಸೇವೆಗಳನ್ನು ನೀಡುತ್ತೀರಿ?",
    botResponse: "ನಾವು ದೇವಾಲಯ ದರ್ಶನ ಬುಕಿಂಗ್, ಆನ್‌ಲೈನ್ ದೇಣಿಗೆಗಳು, ಪ್ರಸಾದ ವಿತರಣೆ ಮತ್ತು ಹೆಚ್ಚಿನದನ್ನು ನೀಡುತ್ತೇವೆ!"
  },
  ml: {
    title: "UPOS സഹായി",
    placeholder: "നിങ്ങളുടെ സന്ദേശം ടൈപ്പ് ചെയ്യുക...",
    welcome: "UPOS ലേക്ക് സ്വാഗതം! ഇന്ന് ഞാൻ നിങ്ങളെ എങ്ങനെ സഹായിക്കും?",
    userQuestion: "നിങ്ങൾ എന്ത് സേവനങ്ങളാണ് നൽകുന്നത്?",
    botResponse: "ഞങ്ങൾ ക്ഷേത്ര ദർശന ബുക്കിംഗ്, ഓൺലൈൻ സംഭാവനകൾ, പ്രസാദം ഡെലിവറി എന്നിവയും അതിലേറെയും നൽകുന്നു!"
  },
  mr: {
    title: "UPOS सहाय्यक",
    placeholder: "तुमचा संदेश टाइप करा...",
    welcome: "UPOS मध्ये आपले स्वागत आहे! आज मी तुम्हाला कशी मदत करू शकतो?",
    userQuestion: "तुम्ही कोणत्या सेवा देता?",
    botResponse: "आम्ही मंदिर दर्शन बुकिंग, ऑनलाइन दान, प्रसाद वितरण आणि बरेच काही देतो!"
  },
  bn: {
    title: "UPOS সহায়ক",
    placeholder: "আপনার বার্তা টাইপ করুন...",
    welcome: "UPOS এ আপনাকে স্বাগতম! আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?",
    userQuestion: "আপনি কি কি সেবা প্রদান করেন?",
    botResponse: "আমরা মন্দির দর্শন বুকিং, অনলাইন দান, প্রসাদ ডেলিভারি এবং আরও অনেক কিছু প্রদান করি!"
  }
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState<Array<{ role: string; text: string }>>([]);
  const [inputValue, setInputValue] = useState("");

  const t = translations[language];

  // Initialize with welcome message in selected language
  const initializeChat = () => {
    setMessages([
      { role: "bot", text: t.welcome },
      { role: "user", text: t.userQuestion },
      { role: "bot", text: t.botResponse },
    ]);
  };

  // Update messages when language changes
  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    const newT = translations[newLang];
    setMessages([
      { role: "bot", text: newT.welcome },
      { role: "user", text: newT.userQuestion },
      { role: "bot", text: newT.botResponse },
    ]);
  };

  // Handle sending messages
  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { role: "user", text: inputValue }]);
      setInputValue("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: "bot", 
          text: t.botResponse 
        }]);
      }, 500);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  // Initialize chat when opened
  const handleOpen = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      initializeChat();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 hover:scale-110 transition-transform"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-50 flex flex-col animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <h3 className="font-semibold">{t.title}</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 hover:bg-primary-foreground/20 text-primary-foreground"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Language Selector */}
          <div className="p-3 border-b bg-muted/30">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent className="bg-background z-[60]">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t bg-background">
            <div className="flex gap-2">
              <Input
                placeholder={t.placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button 
                size="icon" 
                className="shrink-0" 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
