import { wordData } from "../../utils/wordCloudData"

const paddingArray = ['2px 5px', '2px 10px', '15px']
const positionArray = ['flex-start', 'flex-center', 'flex-end']

export const SimpleCloud = () => {
  return (
    <div className="w-full h-fit xl:h-screen flex justify-center items-start xl:items-center lg:py-20">
      <section
        className="h-3/5 w-full xl:w-3/5 flex flex-wrap justify-center">
        {wordData.map(item => {
          const randomPadding = paddingArray[Math.floor(Math.random() * paddingArray.length)];
          const randomPosition = positionArray[Math.floor(Math.random() * positionArray.length)];
          const randomOrder = Math.floor(Math.random() * 20)
          return (
            <h2
              className="word-transition"
              style={{ 
                height: "fit-content", 
                lineHeight: "100%", 
                fontSize: item.value, 
                padding: randomPadding, 
                color: item.color, 
                alignSelf: randomPosition, 
                order: randomOrder, 
                cursor: "pointer"
              }}
              key={item.id}
            >
              {item.text}
            </h2>
          )
        })}
      </section>
    </div>
  )
}
