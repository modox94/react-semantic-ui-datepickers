import format from 'date-fns/format';
import { Props as DayzedProps, RenderProps } from 'dayzed';
import { FormInputProps, SemanticICONS } from 'semantic-ui-react';

export type Object = { [key: string]: any };

export type Locale = {
  todayButton: string;
  nextMonth: string;
  previousMonth: string;
  nextYear: string;
  previousYear: string;
  weekdays: string[];
  months: string[];
};

export type PickedDayzedProps = Pick<
  DayzedProps,
  'date' | 'maxDate' | 'minDate' | 'firstDayOfWeek' | 'showOutsideDays'
>;

export type PickedFormInputProps = Pick<
  FormInputProps,
  | 'autoFocus'
  | 'className'
  | 'disabled'
  | 'error'
  | 'iconPosition'
  | 'id'
  | 'label'
  | 'loading'
  | 'name'
  | 'placeholder'
  | 'size'
  | 'tabIndex'
  | 'transparent'
  | 'readOnly'
>;

export type FnsFormatOptions = Parameters<typeof format>[2];

export type SemanticDatepickerProps = PickedDayzedProps &
  PickedFormInputProps & {
    allowOnlyNumbers: boolean;
    autoComplete?: string;
    clearOnSameDateClick: boolean;
    clearable: boolean;
    clearIcon?: SemanticICONS | React.ReactElement;
    filterDate: (date: Date) => boolean;
    format: string;
    formatOptions?: FnsFormatOptions;
    keepOpenOnClear: boolean;
    keepOpenOnSelect: boolean;
    icon?: SemanticICONS | React.ReactElement;
    inline: boolean;
    inverted: boolean;
    locale: Locale;
    onBlur: (event: React.SyntheticEvent) => void;
    onFocus: (event: React.SyntheticEvent) => void;
    onChange: (
      event: React.SyntheticEvent | undefined,
      data: SemanticDatepickerProps
    ) => void;
    pointing: 'left' | 'right' | 'top left' | 'top right';
    required?: boolean;
    showToday: boolean;
    type: 'basic' | 'range';
    datePickerOnly: boolean;
    value: DayzedProps['selected'] | null;
  };

export type BaseDatePickerProps = DayzedProps & {
  children: any;
};

export interface BasicDatePickerProps extends BaseDatePickerProps {
  clearOnSameDateClick?: boolean;
  onChange: (event: React.SyntheticEvent, date: Date | null) => void;
  selected: Date;
}

export interface RangeDatePickerProps extends BaseDatePickerProps {
  onChange: (event: React.SyntheticEvent, dates: Date[] | null) => void;
  selected: Date[];
}

export type { DayzedProps, RenderProps };
