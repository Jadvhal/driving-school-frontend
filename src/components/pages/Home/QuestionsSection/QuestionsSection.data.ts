export interface Question {
  id: number;
  title: string;
  description: string;
  isOpen: boolean;
}

export const data: Question[] = [
  {
    id: 1,
    title: "Does my data get stored by ZeroGPT ?",
    description:
      "No, none of the data posted on the site for detection is stored after the results are received. Our tool is designed to process and analyze the content in real-time. Thus, once the results are obtained, no data is stored in our system. Thus, you can stay assured that your information stays safe and secure, as your privacy and data security are of utmost importance to us.",
    isOpen: false
  },
  {
    id: 2,
    title: "Can ZeroGPT Work with Different Languages ?",
    description:
      "Yes, ZeroGPT can work with different languages. This tool is designed to support worldwide usage. Thus, it can provide accurate text detection results for multiple languages.",
    isOpen: false
  },
  {
    id: 3,
    title: "Does ZeroGPT only detect ChatGPT ?",
    description:
      "No, ZeroGPT is a versatile tool that can detect results from other AI models as well. For instance, ZeroGPT works accurately and precisely for GPT-4, GPT-3, GPT-2, LLaMA, Google Bard, Jasper AI, Copy.AI or other AI services based on these models.",
    isOpen: false
  },
  {
    id: 4,
    title: "Will my text get plagiarized or be available online, if I check it on ZeroGPT ?",
    description:
      "The Privacy of our users is our top concern. When you input and check your tet on ZeroGPT, your text will not be saved or available online. And we will not use your text to train our AI detection model.",
    isOpen: false
  },
  {
    id: 5,
    title: "How can I integrate ZeroGPT tool in my organization or website on a large scale ?",
    description:
      "You are a company, a university or educational institution, an organization, a writing or content creation agency, ... Contact us via email using this link to discuss in detail about your needs and how we can integrate ZeroGPT into your organization. We provide access to our private API through our Paid Professional plans customized based on our clients' needs.",
    isOpen: false
  }
   {
    id: 6,
    title: "Does ZeroGPT work with different languages ?",
    description:
      "ZeroGPT has a worldwide usage with multilingual users. It detects AI text output in all the available languages.",
    isOpen: false
  }
];
