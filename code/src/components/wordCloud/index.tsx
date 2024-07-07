import { useState } from "react";

const data = [
  { id: 1, text: "Couple Therapy", value: "64px", color: "#A83526" },
  { id: 2, text: "Life crisis", value: "36px", color: "#5AB2BE" },
  { id: 3, text: "Grief", value: "64px", color: "#A83526" },
  { id: 4, text: "Health issues", value: "20px", color: "#5AB2BE" },
  { id: 5, text: "LGBT", value: "36px", color: "#5AB2BE" },
  { id: 6, text: "Meaning", value: "20px", color: "#5AB2BE" },
  { id: 8, text: "Advice and support", value: "20px", color: "#5AB2BE" },
  { id: 9, text: "Fear", value: "36px", color: "#5AB2BE" },
  { id: 10, text: "Family Therapy", value: "64px", color: "#A83526" },
  { id: 11, text: "Life Purpose", value: "36px", color: "#5AB2BE" },
  { id: 12, text: "Depression", value: "20px", color: "#5AB2BE" },
  { id: 13, text: "Divorce", value: "36px", color: "#5AB2BE" },
  { id: 14, text: "Stress", value: "36px", color: "#5AB2BE" },
  { id: 15, text: "Relationships", value: "64px", color: "#5AB2BE" },
  { id: 16, text: "Cancer", value: "20px", color: "#5AB2BE" },
  { id: 17, text: "Workplace Issues", value: "36px", color: "#5AB2BE" },
  { id: 18, text: "Individual Therapy", value: "64px", color: "#A83526" },
  { id: 19, text: "Trauma", value: "64px", color: "#A83526" }
];

const paddingArray = ['2px 5px', '2px 10px', '15px']
const positionArray = ['flex-start', 'flex-center', 'flex-end']

interface Word {
  id: number;
  text: string;
  value: string;
  color: string;
  order?: number; // Make order property optional
}

export const SimpleCloud = () => {
  const [orderedData, setOrderedData] = useState<Word[]>(data);
  const [generatedOrderedData, setGeneratedOrderedData] = useState<number | null>(1);

  const reorderWords = (id: number) => {
    const newOrder = Math.floor(Math.random() * 20); // Generate new order value
    setGeneratedOrderedData(newOrder);

    // Update orderedData with the new order for the clicked word
    const updatedData = orderedData.map(word => {
      if (word.id === id) {
        return {
          ...word,
          order: newOrder
        };
      }
      return word;
    });

    setOrderedData(updatedData);
    console.log(generatedOrderedData)
  };

  return (
    <div className="w-full h-fit xl:h-screen flex justify-center items-start xl:items-center lg:pb-7">
      <section
        className="h-3/5 w-full xl:w-3/5 flex flex-wrap justify-center">
        {data.map(item => {
          const randomPadding = paddingArray[Math.floor(Math.random() * paddingArray.length)];
          const randomPosition = positionArray[Math.floor(Math.random() * positionArray.length)];
          const randomOrder = Math.floor(Math.random() * 20)
          return (
            <h2
              className="word-transition"
              style={{ height: "fit-content", lineHeight: "100%", fontSize: item.value, padding: randomPadding, color: item.color, alignSelf: randomPosition, order: generatedOrderedData ?? randomOrder, cursor: "pointer" }}
              key={item.id}
              onMouseEnter={() => reorderWords(item.id)}
            >
              {item.text}
            </h2>
          );
        })}
      </section>
    </div>
  );
};


{/* <WordCloud
      data={data}
      width={500}
      height={500}
      font="DM Serif Display"
      fontStyle="regular"
      fontWeight="regular"
      fontSize={(word) => Math.log2(word.value) * 5}
      spiral="rectangular"
      padding={5}
      random={Math.random}
      fill={(_d: any, i: string) => schemeCategory10ScaleOrdinal(i)}
      onWordClick={(_event, d) => {
        console.log(`onWordClick: ${d.text}`);
      }}
      onWordMouseOver={(_event, d) => {
        console.log(`onWordMouseOver: ${d.text}`);
      }}
      onWordMouseOut={(_event, d) => {
        console.log(`onWordMouseOut: ${d.text}`);
      }}
  /> */}