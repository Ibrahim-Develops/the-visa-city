import { FaStar } from "react-icons/fa"

const StarRating = ({ value }: { value: number }) => {
  const totalStars = 5

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, i) => (
        <FaStar
          key={i}
          className={`text-[20px] ${
            i < value ? 'text-yellow-400' : 'text-gray-600'
          }`}
        />
      ))}
    </div>
  )
}

export default StarRating
