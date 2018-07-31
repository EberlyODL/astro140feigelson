/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-swatch-picker.html
 */

/// <reference path="../polymer/types/polymer.d.ts" />
/// <reference path="../iron-flex-layout/iron-flex-layout.d.ts" />
/// <reference path="../paper-icon-button/paper-icon-button.d.ts" />
/// <reference path="../paper-item/paper-item.d.ts" />
/// <reference path="../paper-listbox/paper-listbox.d.ts" />
/// <reference path="../paper-menu-button/paper-menu-button.d.ts" />
/// <reference path="paper-swatch-picker-icon.d.ts" />

/**
 * This is a simple color picker element that will allow you to choose one
 * of the Material Design colors from a list of available swatches.
 *
 * Example:
 *
 *     <paper-swatch-picker></paper-swatch-picker>
 *
 *     <paper-swatch-picker color="{{selectedColor}}"></paper-swatch-picker>
 *
 * You can configure the color palette being used using the `colorList` array and
 * the `columnCount` property, which specifies how many "generic" colours (i.e. columns
 * in the picker) you want to display.
 *
 *     <paper-swatch-picker column-count=5 color-list='["#65a5f2", "#83be54", "#f0d551", "#e5943c", "#a96ddb"]'></paper-swatch-picker>
 *
 * ### Styling
 *
 * The following custom properties and mixins are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|----------
 * `--paper-swatch-picker-color-size` | The size of each of the color boxes | `20px`
 * `--paper-swatch-picker-icon-size` | The size of the color picker icon | `24px`
 * `--paper-swatch-picker-icon` | Mixin applied to the color picker icon | `{}`
 */
interface PaperSwatchPickerElement extends Polymer.Element {

  /**
   * The selected color, as hex (i.e. #ffffff).
   * value.
   */
  color: string|null|undefined;

  /**
   * The colors to be displayed. By default, these are the Material Design
   * colors. This array is arranged by "generic color", so for example,
   * all the reds (from light to dark), then the pinks, then the blues, etc.
   * Depending on how many of these generic colors you have, you should
   * update the `columnCount` property.
   */
  colorList: any[]|null|undefined;

  /**
   * The number of columns to display in the picker. This corresponds to
   * the number of generic colors (i.e. not counting the light/dark) variants
   * of a specific color) you are using in your `colorList`. For example,
   * the Material Design palette has 18 colors
   */
  columnCount: number|null|undefined;

  /**
   * The orientation against which to align the menu dropdown
   * horizontally relative to the dropdown trigger.
   */
  horizontalAlign: string|null|undefined;

  /**
   * The orientation against which to align the menu dropdown
   * vertically relative to the dropdown trigger.
   */
  verticalAlign: string|null|undefined;

  /**
   * The name of the icon to use for the button used as a dropdown trigger.
   * The name should be of the form: `iconset_name:icon_name`.
   * You must manually import the icon/iconset you wish you use.
   */
  icon: string|null|undefined;

  /**
   * If true, the color picker button will not produce a ripple effect when interacted
   * with via the pointer.
   */
  noink: boolean|null|undefined;
  hostAttributes: object|null;
  attached(): void;

  /**
   * Returns the default Material Design colors.
   */
  defaultColors(): any;
  _onOpen(): void;
  _addOverflowClass(): void;
  _removeOverflowClass(): void;
  _onColorTap(event: any): void;
  _colorChanged(): void;
  _colorListChanged(): void;
  _columnCountChanged(): void;

  /**
   * Takes an rgb(r, g, b) style string and converts it to a #ffffff hex value.
   */
  _rgbToHex(rgb: any): any;
  _updateSize(): void;
}

interface HTMLElementTagNameMap {
  "paper-swatch-picker": PaperSwatchPickerElement;
}
