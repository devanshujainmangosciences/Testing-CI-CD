/**
 * Module defining type of form fields for vbc program step2
 */
import i18n from '../../../../i18n';
import {downArrorIcon} from 'assets/icons';
import {insuranceOptions} from 'constants';
import {panValidator} from 'utils';

export const financialInfoFieldsArray = [
  {
    valueKey: 'accountNumber',
    required: false,
    inputType: 'textInput',
    placeholder: 'bankAccountNumber',
    errorMessageKey: 'accountNumberError',
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankName',
    inputType: 'textInput',
    required: false,
    placeholder: 'bankName',
    errorMessageKey: 'bankNameError',
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankBranch',
    required: false,
    inputType: 'textInput',
    placeholder: 'bankBranch',
    errorMessageKey: 'bankBranchError',
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankIfscCode',
    inputType: 'textInput',
    required: false,
    placeholder: 'bankIFSCCode',
    errorMessageKey: 'bankIfscCodeError',
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
];

export const professionalInfoFieldArray = [
  {
    inputType: 'textInput',
    placeholder: 'panNumber',
    valueKey: 'panNumber',
    required: false,
    errorMessageKey: 'panNumberError',
    validationFunction: panValidator,
    validationErrorMessage:
      i18n.t('validationMessages:pleaseEnterValid') +
      i18n.t('completeProfile:panNumber'),
    keyboardType: 'default',
  },
  {
    inputType: 'dropdown',
    valueKey: 'educationLevel',
    dropdownValue: 'educationLevel',
    rightInputIcon: downArrorIcon,
    placeholder: 'educationLevel',
    errorMessageKey: 'educationLevelError',
    isOtherOptionAvailable: true,
    required: false,
  },
  {
    inputType: 'dropdown',
    valueKey: 'occupation',
    dropdownValue: 'occupation',
    rightInputIcon: downArrorIcon,
    placeholder: 'profession',
    errorMessageKey: 'occupationError',
    isOtherOptionAvailable: true,
    required: false,
  },
  {
    inputType: 'dropdown',
    valueKey: 'employerName',
    dropdownValue: 'employerName',
    rightInputIcon: downArrorIcon,
    placeholder: 'EmployerCompanyName',
    errorMessageKey: 'employerNameError',
    isOtherOptionAvailable: true,
    required: false,
  },
  {
    inputType: 'dropdown',
    valueKey: 'industry',
    dropdownValue: 'industry',
    rightInputIcon: downArrorIcon,
    placeholder: 'Industry',
    errorMessageKey: 'industryError',
    isOtherOptionAvailable: true,
    required: false,
  },
  {
    inputType: 'textInput',
    valueKey: 'designation',
    placeholder: 'designation',
    errorMessageKey: 'designationError',
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
    required: false,
  },
  {
    inputType: 'textInput',
    valueKey: 'selfAnnualIncome',
    placeholder: 'averageAnnualEarnings',
    keyboardType: 'numeric',
    errorMessageKey: 'selfAnnualIncomeError',
    validationFunction: null,
    validationErrorMessage: '',
    required: true,
  },
  {
    inputType: 'textInput',
    valueKey: 'otherIncomeSource',
    placeholder: 'anyotherSourcesofIncome',
    keyboardType: 'numeric',
    errorMessageKey: 'otherIncomeSourceError',
    validationFunction: null,
    validationErrorMessage: '',
    required: false,
  },
  {
    inputType: 'dropdown',
    valueKey: 'insurance',
    dropdownValue: 'insurance',
    dropdownItems: insuranceOptions,
    rightInputIcon: downArrorIcon,
    placeholder: 'insurance',
    errorMessageKey: 'insuranceError',
    required: false,
  },
  {
    inputType: 'dropdown',
    valueKey: 'insuranceCompany',
    dropdownValue: 'insuranceCompany',
    rightInputIcon: downArrorIcon,
    placeholder: 'insuranceCompany',
    errorMessageKey: 'insuranceCompanyError',
    isOtherOptionAvailable: false,
  },
  {
    inputType: 'textInput',
    valueKey: 'maturityAmount',
    placeholder: 'maturityAmount',
    keyboardType: 'numeric',
    errorMessageKey: 'maturityAmountError',
    validationFunction: null,
    validationErrorMessage: '',
  },
  {
    inputType: 'textInput',
    valueKey: 'familyAnnualIncome',
    placeholder: 'annualFamilyIncome',
    keyboardType: 'numeric',
    errorMessageKey: 'familyAnnualIncomeError',
    validationFunction: null,
    validationErrorMessage: '',
    required: true,
  },
];
