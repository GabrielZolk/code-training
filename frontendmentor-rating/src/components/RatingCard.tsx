import { useState } from 'react'
import styles from './RatingCard.module.css'

export default function RatingCard() {
  const [rating, setRating] = useState<number>()
  const [isSubmited, setIsSubmited] = useState<boolean>(false)

  const handleRating = (rating: number) => {
    setRating(rating)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmited(true)
  }

  if (isSubmited) {
    return (
      <div className={styles.card} style={{alignItems: 'center'}}>
        <div>
          <img src='/illustration-thank-you.svg' alt='cellphone' />
        </div>
        <div className={styles.pill}>
          <p>You selected {rating} out of 5!</p>
        </div>
        <div className={styles.center}>
        <h1 className={styles.title}>
          Thank you!
        </h1>
        <p className={styles.text}>We appreciated you taking the time to give a rating. If you need more support, don't hesitate to get in touch!</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={styles.card}>
      <div>
        <img className={styles.star} src='./icon-star.svg' alt='star' />
      </div>
      <h1 className={styles.title}>How did we do?</h1>
      <p className={styles.text}>
        Please let us know how we did with your support request. all feedback is appreciated help us improve our offering!
      </p>
      <div className={styles.buttonGroup}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            type='button'
            onClick={() => handleRating(rating)}
            className={styles.ratingButton}>
            {rating}
          </button>
        ))}
      </div>
      <button type='submit' className={styles.submit}>Submit</button>

    </form>
  )
}
