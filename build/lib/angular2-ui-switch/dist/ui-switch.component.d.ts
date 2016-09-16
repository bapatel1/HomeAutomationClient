import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class UiSwitchComponent implements ControlValueAccessor {
    private onTouchedCallback;
    private onChangeCallback;
    private _checked;
    private _disabled;
    checked: boolean;
    disabled: boolean;
    size: string;
    change: EventEmitter<boolean>;
    color: string;
    defaultBgColor: string;
    defaultBoColor: string;
    onToggle(): void;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
}
