import { Any } from '@angular-ru/common/typings';

export function unique(value: Any, index: number, self: Any[]): boolean {
    return self.indexOf(value) === index;
}
