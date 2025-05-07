// A floating chat modal with mock AI responses.
// Explanation:

// Floating button toggles a chat modal.
// Mock responses simulate an AI.
// Animations enhance UX.
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const mockResponses = {
    'how do i sell my license?': 'To sell your license, upload the details in our secure portal, get a valuation within 24 hours, and receive payment after approval.',
    'what is softsell?': 'SoftSell is a platform to sell your unused software licenses quickly and securely.',
    'how long does it take to get paid?': 'Payments are processed within 2-3 business days after license approval.',
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = { text: input, sender: 'user' };
    const responseText = mockResponses[input.toLowerCase()] || 'Sorry, I don’t have an answer for that. Try asking about selling licenses!';
    const botMessage = { text: responseText, sender: 'bot' };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        💬
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-white w-80 sm:w-96 h-96 rounded-lg shadow-xl mt-2 flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold text-base sm:text-lg">SoftSell Assistant</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.length === 0 && (
                <p className="text-gray-500 text-sm sm:text-base">Try asking: "How do I sell my license?"</p>
              )}
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}
                >
                  <span
                    className={`inline-block p-2 rounded-lg text-sm sm:text-base ${
                      msg.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChatWidget;