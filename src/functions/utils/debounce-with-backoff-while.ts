import { MonoTypeOperatorFunction, Observable } from 'rxjs';
import { debounce } from 'rxjs/operators';
import { rxjsDynamicDuration } from './rxjs-dynamic-duration';

/**
 * `debounceWithBackoff` works like `debounceTime`, but uses a backoff strategy to increase the dueTime as the source
 * Observable emits notifications.
 *
 * That is, `debounceWithBackoff` delays notifications emitted by the source Observable, dropping cached notifications
 * and restarting timers as new notifications arrive from the source. The rules for hanging on to cached notifications
 * and handling complete/error are the same as `debounceTime`.
 *
 * `debounceWithBackoff` starts with a dueTime of `initialDueTime` and increments the dueTime by `step`
 * to a maximum of `maxDueTime` as long as `predicate(value)` returns true for each `value` emitted by the source.
 *
 * If `predicate(value)` returns false for a given `value`, the dueTime is reset to `initialDueTime` for that notification.
 *
 * In other words, `debounceWithBackoffWhile({initialDueTime: 1000, step:..., maxDueTime: ..., predicate: () => false})`
 * is functionally equivalent to `debounceTime(1000)`.
 *
 * @returns A function that returns an Observable that delays the emissions of the source Observable by the
 * specified duration Observable returned by durationSelector, and may drop some values if they occur too frequently.
 */
export const debounceWithBackoffWhile = <T>({
	initialDueTime,
	step,
	maxDueTime,
	predicate,
}: {
	initialDueTime: number;
	step: number;
	maxDueTime: number;
	predicate: (value: T) => boolean;
}): MonoTypeOperatorFunction<T> => {
	const nextDueTime = (lastDueTime: number, value: T) => {
		if (!predicate(value)) {
			return initialDueTime;
		}
		return Math.min(lastDueTime + step, maxDueTime);
	};

	return (source: Observable<T>): Observable<T> =>
		source.pipe(debounce(rxjsDynamicDuration(nextDueTime, initialDueTime)));
};
