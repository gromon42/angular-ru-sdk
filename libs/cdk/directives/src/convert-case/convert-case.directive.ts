import { AfterViewInit, Directive, ElementRef, HostListener, Input, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { toStringValue } from '@angular-ru/cdk/string';

@Directive({ selector: '[convertCase]' })
export class ConvertCaseDirective implements AfterViewInit {
    @Input() public toUpperCase: boolean = true;
    @Input() public toLowerCase: boolean = false;

    constructor(private readonly elementRef: ElementRef, @Optional() private readonly ngControl?: NgControl) {}

    private get element(): MatInput {
        return this.elementRef.nativeElement;
    }

    @HostListener('input')
    public onInput(): void {
        const dirtyValue: string = toStringValue(this.element.value);

        this.element.value = this.toLowerCase ? dirtyValue.toLowerCase() : dirtyValue.toUpperCase();
        this.ngControl?.reset(this.element.value);
    }

    public ngAfterViewInit(): void {
        if (this.element.value) {
            this.onInput();
        }
    }
}
