export default class SmallestContainer {
  getSmallestContainer(days: number, boxes: Array<number>): number | null {
    if (days === 0) {
      return null;
    }
    const totalWeight = boxes.reduce((total: number, weight: number) => {
      return total + weight;
    }, 0);

    if (days === 1) {
      return totalWeight;
    }

    let sortedBoxes = boxes.sort(function (a, b) {
      return a - b;
    });

    let bestContainer = null;
    let largestWeight = sortedBoxes.length - 1;

    for (
      let containerSize = largestWeight;
      containerSize <= totalWeight;
      containerSize++
    ) {
      let isValid = this.isValidContainer(containerSize, days, sortedBoxes);
      if (isValid) {
        bestContainer = containerSize;
        break;
      }
    }
    return bestContainer;
  }

  private isValidContainer(
    containerSize: number,
    daysToShip: number,
    boxes: number[]
  ): boolean {
    let largestWeight = boxes.length - 1;
    let day = 1;
    let boxMarker = largestWeight;

    while (day <= daysToShip) {
      let totalSizeForTheDay = 0;

      while (boxMarker >= 0) {
        //  get heaviest box
        let currentBoxSize = boxes[boxMarker];
        // there was a box remaining
        totalSizeForTheDay += currentBoxSize;

        //  if not heavier than container, get next heaviest
        if (totalSizeForTheDay > containerSize) {
          break;
        }

        boxMarker--;
      }

      // we've loaded all boxes over all the days!
      if (boxMarker < 0) {
        return true;
      }

      // we must have boxes left over so we'll need to try shoving them in container the next day
      day++;
    }

    // we must have boxes remaining, yet we've exceeded our day threshold.  Need bigger container.
    return false;
  }
}
