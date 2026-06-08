
import Card from '../components/atoms/Card'

export function AddPurchase() {
  return (
    <Card variant="addPurchase">
      <p className={'m-0 text-4xl font-semibold leading-5'}>Add your purchases here!</p>
      <button type="button" className={'flex items-center justify-center w-[106px] h-[106px] border-none rounded-[50%] bg-white cursor-pointer transition-transform duration-200 ease-in hover:scale-110'} aria-label="Add purchase">
        <span className={'text-6xl font-semibold'}>Add</span>
        <span className="sr-only">Add</span>
      </button>
    </Card>
  )
}