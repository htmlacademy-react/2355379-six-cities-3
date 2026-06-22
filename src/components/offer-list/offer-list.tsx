// задача этого компонента - получить массив предложений и отрисовать карточки через `.map()`

import { Offer } from '../../types/offer';
import OfferCard from '../card/offer-card';

type OfferListProps = {
  offers: Offer[];
  onCardMouseEnter: (id: string) => void;
  onCardMouseLeave: () => void;
};

function OfferList({
  offers,
  onCardMouseEnter,
  onCardMouseLeave,
}: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
