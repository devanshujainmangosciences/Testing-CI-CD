/**
 * Module defining type of form fields for edit financial information
 */

import i18n from '../../../i18n';
import {downArrorIcon} from 'assets/icons';
import {panValidator} from 'utils';

export const financialInfoFieldsArray = [
  {
    valueKey: 'accountNumber',
    inputType: 'textInput',
    placeholder: 'bankAccountNumber',
    errorMessageKey: 'accountNumberError',
    required: false,
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankName',
    inputType: 'textInput',
    placeholder: 'bankName',
    errorMessageKey: 'bankNameError',
    required: false,
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankBranch',
    inputType: 'textInput',
    placeholder: 'bankBranch',
    errorMessageKey: 'bankBranchError',
    required: false,
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'bankIfscCode',
    inputType: 'textInput',
    placeholder: 'bankIFSCCode',
    errorMessageKey: 'bankIFSCCodeError',
    required: false,
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
];

export const professionalInfoFieldsArray = [
  {
    valueKey: 'panNumber',
    inputType: 'textInput',
    required: false,
    placeholder: 'panNumber',
    errorMessageKey: 'panNumberError',
    validationFunction: panValidator,
    validationErrorMessage:
      i18n.t('validationMessages:pleaseEnterValid') +
      i18n.t('completeProfile:panNumber'),
    keyboardType: 'default',
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'educationLevel',
    dropdownValue: 'educationLevel',
    rightInputIcon: downArrorIcon,
    placeholder: 'educationLevel',
    errorMessageKey: 'educationLevelError',
    isOtherOptionAvailable: true,
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'occupation',
    dropdownValue: 'occupation',
    rightInputIcon: downArrorIcon,
    placeholder: 'profession',
    errorMessageKey: 'occupationError',
    isOtherOptionAvailable: true,
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'employerName',
    dropdownValue: 'employerName',
    rightInputIcon: downArrorIcon,
    placeholder: 'EmployerCompanyName',
    errorMessageKey: 'employerNameError',
    isOtherOptionAvailable: true,
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'industry',
    dropdownValue: 'industry',
    rightInputIcon: downArrorIcon,
    placeholder: 'Industry',
    errorMessageKey: 'industryError',
    isOtherOptionAvailable: true,
  },
  {
    valueKey: 'designation',
    inputType: 'textInput',
    placeholder: 'designation',
    errorMessageKey: 'designationError',
    required: false,
    validationFunction: null,
    validationErrorMessage: '',
    keyboardType: 'default',
  },
  {
    valueKey: 'selfAnnualIncome',
    inputType: 'textInput',
    placeholder: 'averageAnnualEarnings',
    errorMessageKey: 'selfAnnualIncomeError',
    keyboardType: 'numeric',
    required: true,
    validationFunction: null,
    validationErrorMessage: '',
  },
  {
    valueKey: 'otherIncomeSource',
    inputType: 'textInput',
    placeholder: 'anyotherSourcesofIncome',
    errorMessageKey: 'otherIncomeSourceError',
    required: false,
    keyboardType: 'numeric',
    validationFunction: null,
    validationErrorMessage: '',
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'insurance',
    dropdownValue: 'insurance',
    rightInputIcon: downArrorIcon,
    placeholder: 'insurance',
    errorMessageKey: 'insuranceError',
  },
  {
    required: false,
    inputType: 'dropdown',
    valueKey: 'insuranceCompany',
    dropdownValue: 'insuranceCompany',
    rightInputIcon: downArrorIcon,
    placeholder: 'insuranceCompany',
    errorMessageKey: 'insuranceCompanyError',
    isOtherOptionAvailable: true,
  },
  {
    valueKey: 'maturityAmount',
    inputType: 'textInput',
    placeholder: 'maturityAmount',
    errorMessageKey: 'maturityAmountError',
    required: false,
    keyboardType: 'numeric',
    validationFunction: null,
    validationErrorMessage: '',
  },
  {
    valueKey: 'familyAnnualIncome',
    inputType: 'textInput',
    placeholder: 'annualFamilyIncome',
    errorMessageKey: 'familyAnnualIncomeError',
    required: true,
    keyboardType: 'numeric',
    validationFunction: null,
    validationErrorMessage: '',
  },
];
