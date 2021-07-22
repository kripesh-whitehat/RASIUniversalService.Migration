module.exports = [
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'AuthenticationLockOutContact',
    sql: id => `from RSIAccounting.dbo.AuthenticationLockOutContact where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'AuthenticationRule',
    sql: id => `from RSIAccounting.dbo.AuthenticationRule where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'AuthorizationRole',
    sql: id => `from RSIAccounting.dbo.AuthorizationRole where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'BillingRequest',
    sql: id => `from RSIAccounting.dbo.BillingRequest where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'ConcurrentClientUnitLock',
    sql: id => `from RSIAccounting.dbo.ConcurrentClientUnitLock where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'Corporate',
    sql: id => `from RSIAccounting.dbo.Corporate where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateAddress',
    sql: id => `from RSIAccounting.dbo.CorporateAddress where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccount',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccount where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccountAggregatorAccount',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccountAggregatorAccount where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccountAggregatorConection',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccountAggregatorConection where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccountExport',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccountExport where CorporateBankAccountID in (select CorporateBankAccountID from RSIAccounting.dbo.CorporateBankAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccountInstitution',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccountInstitution where CorporateBankAccountAggregatorConectionID in (select CorporateBankAccountAggregatorConectionID from RSIAccounting.dbo.CorporateBankAccountAggregatorConection where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateBankAccountTransactionExport',
    sql: id => `from RSIAccounting.dbo.CorporateBankAccountTransactionExport where CorporateBankAccountID in (select CorporateBankAccountID from RSIAccounting.dbo.CorporateBankAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateChartOfAccount',
    sql: id => `from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateChartOfAccountBankReconciliationExport',
    sql: id => `from RSIAccounting.dbo.CorporateChartOfAccountBankReconciliationExport where CorporateChartOfAccountID in (select CorporateChartOfAccountID from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateChartOfAccountDetail',
    sql: id => `from RSIAccounting.dbo.CorporateChartOfAccountDetail where CorporateChartOfAccountID in (select CorporateChartOfAccountID from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateChartOfAccountTemp',
    sql: id => `from RSIAccounting.dbo.CorporateChartOfAccountTemp where CorporateChartOfAccountID in (select CorporateChartOfAccountID from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateChartOfAccountTransaction',
    sql: id => `from RSIAccounting.dbo.CorporateChartOfAccountTransaction where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateContent',
    sql: id => `from RSIAccounting.dbo.CorporateContent where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateContentRecipient',
    sql: id => `from RSIAccounting.dbo.CorporateContentRecipient where CorporateContentRecipientId in (select CorporateContentRecipientId from RSIAccounting.dbo.CorporateContentRecipientUnitCorporateFinancialStatementSpecification where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateContentRecipientUnitCorporateFinancialStatementSpecification',
    sql: id => `from RSIAccounting.dbo.CorporateContentRecipientUnitCorporateFinancialStatementSpecification where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateDeductionAndEarning401kCode',
    sql: id => `from RSIAccounting.dbo.CorporateDeductionAndEarning401kCode where CorporateDeductionAndEarningCodeID in (select CorporateDeductionAndEarningCodeID from RSIAccounting.dbo.CorporateDeductionAndEarningCode where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateDeductionAndEarningCode',
    sql: id => `from RSIAccounting.dbo.CorporateDeductionAndEarningCode where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateFinancialStatementBody',
    sql: id => `from RSIAccounting.dbo.CorporateFinancialStatementBody where CorporateFinancialStatementLayoutID in (select CorporateFinancialStatementLayoutID from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateFinancialStatementLayout',
    sql: id => `from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateFinancialStatementLayoutText',
    sql: id => `from RSIAccounting.dbo.CorporateFinancialStatementLayoutText where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateFinancialStatementSpecification',
    sql: id => `from RSIAccounting.dbo.CorporateFinancialStatementSpecification where CorporateFinancialStatementLayoutID in (select CorporateFinancialStatementLayoutID from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateFinancialStatementSubtotalCategory',
    sql: id => `from RSIAccounting.dbo.CorporateFinancialStatementSubtotalCategory where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateGLaccountReference',
    sql: id => `from RSIAccounting.dbo.CorporateGLaccountReference where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateInventoryItem',
    sql: id => `from RSIAccounting.dbo.CorporateInventoryItem where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateInventoryItemMeasure',
    sql: id => `from RSIAccounting.dbo.CorporateInventoryItemMeasure where CorporateInventoryItemMeasureID in (select CorporateInventoryItemID from RSIAccounting.dbo.CorporateInventoryItem where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateInventoryItemMerge',
    sql: id => `from RSIAccounting.dbo.CorporateInventoryItemMerge where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateInventoryItemQuantity',
    sql: id => `from RSIAccounting.dbo.CorporateInventoryItemQuantity where InventoryItemQuantityID in (select CorporateInventoryItemID from RSIAccounting.dbo.CorporateInventoryItem where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateJobCode',
    sql: id => `from RSIAccounting.dbo.CorporateJobCode where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateLocation',
    sql: id => `from RSIAccounting.dbo.CorporateLocation where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateNetPayCalculation',
    sql: id => `from RSIAccounting.dbo.CorporateNetPayCalculation where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateRecipe',
    sql: id => `from RSIAccounting.dbo.CorporateRecipe where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateRecipeCategory',
    sql: id => `from RSIAccounting.dbo.CorporateRecipeCategory where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateRecipeIngredient',
    sql: id => `from RSIAccounting.dbo.CorporateRecipeIngredient where CorporateRecipeIngredientID in (select CorporateRecipeID from RSIAccounting.dbo.CorporateRecipe where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateRecipeUsageType',
    sql: id => `from RSIAccounting.dbo.CorporateRecipeUsageType where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateShippingEmployeeInstruction',
    sql: id => `from RSIAccounting.dbo.CorporateShippingEmployeeInstruction where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateShippingInstruction',
    sql: id => `from RSIAccounting.dbo.CorporateShippingInstruction where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateShippingPackage',
    sql: id => `from RSIAccounting.dbo.CorporateShippingPackage where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateShippingPackageContent',
    sql: id => `from RSIAccounting.dbo.CorporateShippingPackageContent where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateShippingPackagePayrollItem',
    sql: id => `from RSIAccounting.dbo.CorporateShippingPackagePayrollItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturn',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturn where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnContent',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnContent where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnEmployee',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnEmployee where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnEmployeeReference',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnEmployeeReference where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnExport',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnExport where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnFederal',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnFederal where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnState',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnState where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnStateOther',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnStateOther where CorporateTaxReturnID in (select CorporateTaxReturnID from RSIAccounting.dbo.CorporateTaxReturn where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxReturnUnit',
    sql: id => `from RSIAccounting.dbo.CorporateTaxReturnUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxWorkSheet',
    sql: id => `from RSIAccounting.dbo.CorporateTaxWorkSheet where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxWorkSheetFederal',
    sql: id => `from RSIAccounting.dbo.CorporateTaxWorkSheetFederal where CorporateTaxWorkSheetID in (select CorporateTaxWorkSheetID from RSIAccounting.dbo.CorporateTaxWorkSheet where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxWorkSheetFederalUnemploymentInsurance',
    sql: id => `from RSIAccounting.dbo.CorporateTaxWorkSheetFederalUnemploymentInsurance where CorporateTaxWorkSheetID in (select CorporateTaxWorkSheetID from RSIAccounting.dbo.CorporateTaxWorkSheet where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxWorkSheetLiabilityPayment',
    sql: id => `from RSIAccounting.dbo.CorporateTaxWorkSheetLiabilityPayment where CorporateTaxWorkSheetID in (select CorporateTaxWorkSheetID from RSIAccounting.dbo.CorporateTaxWorkSheet where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateTaxWorkSheetState',
    sql: id => `from RSIAccounting.dbo.CorporateTaxWorkSheetState where CorporateTaxWorkSheetID in (select CorporateTaxWorkSheetID from RSIAccounting.dbo.CorporateTaxWorkSheet where CorporateID in (select CorporateID from RSIAccounting.dbo.Corporate where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateUnitTaxWorkSheet',
    sql: id => `from RSIAccounting.dbo.CorporateUnitTaxWorkSheet where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateVacationAccrualPlan',
    sql: id => `from RSIAccounting.dbo.CorporateVacationAccrualPlan where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateVacationAccrualPlanJobCode',
    sql: id => `from RSIAccounting.dbo.CorporateVacationAccrualPlanJobCode where CorporateVacationAccrualPlanID in (select CorporateVacationAccrualPlanID from RSIAccounting.dbo.CorporateVacationAccrualPlan where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateVendor',
    sql: id => `from RSIAccounting.dbo.CorporateVendor where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateVendorGeneralLedgerAccount',
    sql: id => `from RSIAccounting.dbo.CorporateVendorGeneralLedgerAccount where CorporateVendorID in (select CorporateVendorID from RSIAccounting.dbo.CorporateVendor where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateVendorInventoryItem',
    sql: id => `from RSIAccounting.dbo.CorporateVendorInventoryItem where CorporateVendorID in (select CorporateVendorID from RSIAccounting.dbo.CorporateVendor where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateW2History',
    sql: id => `from RSIAccounting.dbo.CorporateW2History where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'CorporateW2UnitTipAllocationHistory',
    sql: id => `from RSIAccounting.dbo.CorporateW2UnitTipAllocationHistory where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'Division',
    sql: id => `from RSIAccounting.dbo.Division where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'Employee',
    sql: id => `from RSIAccounting.dbo.Employee where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeDirectDeposit',
    sql: id => `from RSIAccounting.dbo.EmployeeDirectDeposit where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeDirectDepositHistory',
    sql: id => `from RSIAccounting.dbo.EmployeeDirectDepositHistory where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeEarningDeduction',
    sql: id => `from RSIAccounting.dbo.EmployeeEarningDeduction where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeGarnishment',
    sql: id => `from RSIAccounting.dbo.EmployeeGarnishment where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeGarnishmentCheck',
    sql: id => `from RSIAccounting.dbo.EmployeeGarnishmentCheck where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeGarnishmentComment',
    sql: id => `from RSIAccounting.dbo.EmployeeGarnishmentComment where EmployeeGarnishmentID in (select EmployeeGarnishmentID from RSIAccounting.dbo.EmployeeGarnishment where EmployeeID in (Select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeGarnishmentDocument',
    sql: id => `from RSIAccounting.dbo.EmployeeGarnishmentDocument where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeGarnishmentTable',
    sql: id => `from RSIAccounting.dbo.EmployeeGarnishmentTable where EmployeeGarnishmentID in (select EmployeeGarnishmentID from RSIAccounting.dbo.EmployeeGarnishment where EmployeeID in (Select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeHealthInsuranceData',
    sql: id => `from RSIAccounting.dbo.EmployeeHealthInsuranceData where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeHealthInsuranceDependentData',
    sql: id => `from RSIAccounting.dbo.EmployeeHealthInsuranceDependentData where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeHealthPlanData',
    sql: id => `from RSIAccounting.dbo.EmployeeHealthPlanData where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeIssuance',
    sql: id => `from RSIAccounting.dbo.EmployeeIssuance where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeNote',
    sql: id => `from RSIAccounting.dbo.EmployeeNote where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheck',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheck where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckDeduction',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckDeduction where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckEmergencyPaidTimeOff',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckEmergencyPaidTimeOff where EmployeePayCheckEmergencyPaidTimeOffID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckGarnishment',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckGarnishment where EmployeeGarnishmentUnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckGarnishment',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckGarnishment where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitid in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckHour',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckHour where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckTax',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckTax where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayCheckView',
    sql: id => `from RSIAccounting.dbo.EmployeePayCheckView where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryEarningsDeductionAdjustmentTotal',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryEarningsDeductionAdjustmentTotal where EmployeePayHistoryTotalID in (select EmployeePayHistoryTotalID from RSIAccounting.dbo.EmployeePayHistoryTotal where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryEarningsDeductionTotal',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryEarningsDeductionTotal where EmployeePayHistoryTotalID in (select EmployeePayHistoryTotalID from RSIAccounting.dbo.EmployeePayHistoryTotal where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryGarnishmentTotal',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryGarnishmentTotal where EmployeePayHistoryTotalID in (select EmployeePayHistoryTotalID from RSIAccounting.dbo.EmployeePayHistoryTotal where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryImportData',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryImportData where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryTaxTotal',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryTaxTotal where EmployeePayHistoryTotalID in (select EmployeePayHistoryTotalID from RSIAccounting.dbo.EmployeePayHistoryTotal where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryTotal',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryTotal where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW2Code',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW2Code where EmployeePayHistoryW2FormID in (select EmployeePayHistoryW2FormID from RSIAccounting.dbo.EmployeePayHistoryW2Form where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW2Form',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW2Form where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW2NegativeSocialSecurityWage',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW2NegativeSocialSecurityWage where EmployeePayHistoryW2FormID in (select EmployeePayHistoryW2FormID from RSIAccounting.dbo.EmployeePayHistoryW2Form where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW2NegativeWagesTipsAmount',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW2NegativeWagesTipsAmount where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW2Wage',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW2Wage where EmployeePayHistoryW2FormID in (select EmployeePayHistoryW2FormID from RSIAccounting.dbo.EmployeePayHistoryW2Form where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW3Code',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW3Code where EmployeePayHistoryW3FormID in (select EmployeePayHistoryW3FormID from RSIAccounting.dbo.EmployeePayHistoryW3Form where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW3Form',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW3Form where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW3Log',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW3Log where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayHistoryW3Wage',
    sql: id => `from RSIAccounting.dbo.EmployeePayHistoryW3Wage where EmployeePayHistoryW3FormID in (select EmployeePayHistoryW3FormID from RSIAccounting.dbo.EmployeePayHistoryW3Form where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayRate',
    sql: id => `from RSIAccounting.dbo.EmployeePayRate where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollDetail',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollDetail where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollPTOAdjustment',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollPTOAdjustment where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollPTOBalance',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollPTOBalance where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollTaxDetail',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollTaxDetail where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollTransaction',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollTransactionDeductionEarningOverride',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollTransactionDeductionEarningOverride where EmployeePayrollTransactionID in (select EmployeePayrollTransactionID from RSIAccounting.dbo.EmployeePayrollTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollTransactionEarningDeduction',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollTransactionEarningDeduction where EmployeePayrollTransactionID in (select EmployeePayrollTransactionID from RSIAccounting.dbo.EmployeePayrollTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePayrollTransactionJobCode',
    sql: id => `from RSIAccounting.dbo.EmployeePayrollTransactionJobCode where EmployeePayrollTransactionID in (select EmployeePayrollTransactionID from RSIAccounting.dbo.EmployeePayrollTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePendingDirectDeposit',
    sql: id => `from RSIAccounting.dbo.EmployeePendingDirectDeposit where EmployeePendingUpdateID in (select EmployeePendingUpdateID from RSIAccounting.dbo.EmployeePendingUpdate where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePendingEarningDeduction',
    sql: id => `from RSIAccounting.dbo.EmployeePendingEarningDeduction where EmployeePendingUpdateID in (select EmployeePendingUpdateID from RSIAccounting.dbo.EmployeePendingUpdate where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePendingPayRate',
    sql: id => `from RSIAccounting.dbo.EmployeePendingPayRate where EmployeePendingUpdateID in (select EmployeePendingUpdateID from RSIAccounting.dbo.EmployeePendingUpdate where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeePendingUpdate',
    sql: id => `from RSIAccounting.dbo.EmployeePendingUpdate where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeReminder',
    sql: id => `from RSIAccounting.dbo.EmployeeReminder where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeTaxingEntityWithholding',
    sql: id => `from RSIAccounting.dbo.EmployeeTaxingEntityWithholding where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeUpdateTransaction',
    sql: id => `from RSIAccounting.dbo.EmployeeUpdateTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'EmployeeW2TipAllocation',
    sql: id => `from RSIAccounting.dbo.EmployeeW2TipAllocation where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'FinancialStatement',
    sql: id => `from RSIAccounting.dbo.FinancialStatement where CorporateFinancialStatementLayoutID in (select CorporateFinancialStatementLayoutID from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'FinancialStatementBodyTolerance',
    sql: id => `from RSIAccounting.dbo.FinancialStatementBodyTolerance where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'FinancialStatementItem',
    sql: id => `from RSIAccounting.dbo.FinancialStatementItem where FinancialStatementID in (select FinancialStatementID from RSIAccounting.dbo.FinancialStatement where CorporateFinancialStatementLayoutID in (select CorporateFinancialStatementLayoutID from RSIAccounting.dbo.CorporateFinancialStatementLayout where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'FinancialStatementSubscriber',
    sql: id => `from RSIAccounting.dbo.FinancialStatementSubscriber where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'FinancialStatementUnit',
    sql: id => `from RSIAccounting.dbo.FinancialStatementUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'MultiUnitDistributedInvoice',
    sql: id => `from RSIAccounting.dbo.MultiUnitDistributedInvoice where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'MultiUnitDistributedInvoice',
    sql: id => `from RSIAccounting.dbo.MultiUnitDistributedInvoice where PaymentUnitID in (select Unitid from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'MultiUnitDistributedInvoiceDetail',
    sql: id => `from RSIAccounting.dbo.MultiUnitDistributedInvoiceDetail where UnitID in (select Unitid from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'PaymentEntity',
    sql: id => `from RSIAccounting.dbo.PaymentEntity where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'PortalEmployee',
    sql: id => `from RSIAccounting.dbo.PortalEmployee where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'PortalUserUnit',
    sql: id => `from RSIAccounting.dbo.PortalUserUnit where PortalUserUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'Reminder',
    sql: id => `from RSIAccounting.dbo.Reminder where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'TempEmployeePayHistoryW2Form',
    sql: id => `from RSIAccounting.dbo.TempEmployeePayHistoryW2Form where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'Unit',
    sql: id => `from RSIAccounting.dbo.Unit where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountingServiceFee',
    sql: id => `from RSIAccounting.dbo.UnitAccountingServiceFee where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountingServiceFeeItem',
    sql: id => `from RSIAccounting.dbo.UnitAccountingServiceFeeItem where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountingServiceHistory',
    sql: id => `from RSIAccounting.dbo.UnitAccountingServiceHistory where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountingServices',
    sql: id => `from RSIAccounting.dbo.UnitAccountingServices where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableApplyPayment',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableApplyPayment where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableChartOfAccountTransaction',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableChartOfAccountTransaction where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableConfiguration',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableConfiguration where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiability',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiability where RSIUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiability',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiability_DeletedIDs',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiability_DeletedIDs where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityDetail',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityDetail where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityDetailLineItem',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityDetailLineItem where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityPayment',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityPayment where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityPaymentContent',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityPaymentContent where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityPaymentSchedule',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityPaymentSchedule where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityScheduledPayment',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityScheduledPayment where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilityStatusLog',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilityStatusLog where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableLiabilitySubmission',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableLiabilitySubmission where UnitAccountsPayableLiabilityID in (select UnitAccountsPayableLiabilityID from RSIAccounting.dbo.UnitAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAccountsPayableSubmission',
    sql: id => `from RSIAccounting.dbo.UnitAccountsPayableSubmission where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAuditGroupResult',
    sql: id => `from RSIAccounting.dbo.UnitAuditGroupResult where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitAuditThreshold',
    sql: id => `from RSIAccounting.dbo.UnitAuditThreshold where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccount',
    sql: id => `from RSIAccounting.dbo.UnitBankAccount where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountAPCheck',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountAPCheck where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountCheck',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountCheck where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountCheckBankReconciliationExport',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountCheckBankReconciliationExport where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountCheckGeorges',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountCheckGeorges where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountCheckRegister',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountCheckRegister where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountConversionCheck',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountConversionCheck where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountTaxCheck',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountTaxCheck where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountTaxCheckRegister',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountTaxCheckRegister where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankAccountUse',
    sql: id => `from RSIAccounting.dbo.UnitBankAccountUse where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankReconciliationEntry',
    sql: id => `from RSIAccounting.dbo.UnitBankReconciliationEntry where UnitBankAccountCheckID in (select UnitBankAccountCheckID from RSIAccounting.dbo.UnitBankAccountCheck where unitID in (select UnitID from RSIAccounting.dbo.unit where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankReconciliationExport',
    sql: id => `from RSIAccounting.dbo.UnitBankReconciliationExport where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitBankReconciliationExportContent',
    sql: id => `from RSIAccounting.dbo.UnitBankReconciliationExportContent where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitContent',
    sql: id => `from RSIAccounting.dbo.UnitContent where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversion',
    sql: id => `from RSIAccounting.dbo.UnitConversion where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionDeductionAndEarningCode',
    sql: id => `from RSIAccounting.dbo.UnitConversionDeductionAndEarningCode where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionImportData',
    sql: id => `from RSIAccounting.dbo.UnitConversionImportData where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionImportPayHistoryData',
    sql: id => `from RSIAccounting.dbo.UnitConversionImportPayHistoryData where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionPayrollImport',
    sql: id => `from RSIAccounting.dbo.UnitConversionPayrollImport where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionSetup',
    sql: id => `from RSIAccounting.dbo.UnitConversionSetup where RevisedCorporateID = ${id}`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitConversionSetup',
    sql: id => `from RSIAccounting.dbo.UnitConversionSetup where OriginalCorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitDates',
    sql: id => `from RSIAccounting.dbo.UnitDates where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitDeductionAndEarningCode',
    sql: id => `from RSIAccounting.dbo.UnitDeductionAndEarningCode where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitDetail',
    sql: id => `from RSIAccounting.dbo.UnitDetail where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitDetailDDBackup0322020',
    sql: id => `from RSIAccounting.dbo.UnitDetailDDBackup0322020 where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitDivision',
    sql: id => `from RSIAccounting.dbo.UnitDivision where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitEmployee',
    sql: id => `from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitEmployeeReminder',
    sql: id => `from RSIAccounting.dbo.UnitEmployeeReminder where UnitEmployeeId in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitEmployeFederalTaxW2Form',
    sql: id => `from RSIAccounting.dbo.UnitEmployeFederalTaxW2Form where UnitEmployeeID in (select UnitEmployeeID from RSIAccounting.dbo.UnitEmployee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitFinancialCalendar',
    sql: id => `from RSIAccounting.dbo.UnitFinancialCalendar where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitFinancialStatementSpecification',
    sql: id => `from RSIAccounting.dbo.UnitFinancialStatementSpecification where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitFinancialTransaction',
    sql: id => `from RSIAccounting.dbo.UnitFinancialTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitGeneralLedgerPeriodAccountDetail',
    sql: id => `from RSIAccounting.dbo.UnitGeneralLedgerPeriodAccountDetail where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitGeneralLedgerPeriodAccountSummary',
    sql: id => `from RSIAccounting.dbo.UnitGeneralLedgerPeriodAccountSummary where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitGeneralLedgerPeriodBudgetDetail',
    sql: id => `from RSIAccounting.dbo.UnitGeneralLedgerPeriodBudgetDetail where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitGLAccountReference',
    sql: id => `from RSIAccounting.dbo.UnitGLAccountReference where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitIntegrationKey',
    sql: id => `from RSIAccounting.dbo.UnitIntegrationKey where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventory',
    sql: id => `from RSIAccounting.dbo.UnitInventory where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventoryItem',
    sql: id => `from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventoryItemLatestCost',
    sql: id => `from RSIAccounting.dbo.UnitInventoryItemLatestCost where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventoryItemLocation',
    sql: id => `from RSIAccounting.dbo.UnitInventoryItemLocation where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventoryItemQuantity',
    sql: id => `from RSIAccounting.dbo.UnitInventoryItemQuantity where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventoryLocation',
    sql: id => `from RSIAccounting.dbo.UnitInventoryLocation where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInventorySubmittal',
    sql: id => `from RSIAccounting.dbo.UnitInventorySubmittal where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoice',
    sql: id => `from RSIAccounting.dbo.UnitInvoice where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoice_UnitAccountsPayableLiability',
    sql: id => `from RSIAccounting.dbo.UnitInvoice_UnitAccountsPayableLiability where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoice_UnitPayroll',
    sql: id => `from RSIAccounting.dbo.UnitInvoice_UnitPayroll where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoiceApplyPayment',
    sql: id => `from RSIAccounting.dbo.UnitInvoiceApplyPayment where UnitInvoicePaymentID in (select UnitInvoicePaymentID from RSIAccounting.dbo.UnitInvoicePayment where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoiceComment',
    sql: id => `from RSIAccounting.dbo.UnitInvoiceComment where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoiceCorporateChartOfAccountTransaction',
    sql: id => `from RSIAccounting.dbo.UnitInvoiceCorporateChartOfAccountTransaction where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoiceLineItem',
    sql: id => `from RSIAccounting.dbo.UnitInvoiceLineItem where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoiceLineItemApplyPayment',
    sql: id => `from RSIAccounting.dbo.UnitInvoiceLineItemApplyPayment where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoicePayment',
    sql: id => `from RSIAccounting.dbo.UnitInvoicePayment where UnitInvoicePaymentID in (select UnitInvoicePaymentID from RSIAccounting.dbo.UnitInvoicePayment where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoicePayment_UnitAccountsPayableLiability',
    sql: id => `from RSIAccounting.dbo.UnitInvoicePayment_UnitAccountsPayableLiability where UnitInvoicePaymentID in (select UnitInvoicePaymentID from RSIAccounting.dbo.UnitInvoicePayment where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitInvoicePaymentDirectDeposit',
    sql: id => `from RSIAccounting.dbo.UnitInvoicePaymentDirectDeposit where UnitInvoicePaymentID in (select UnitInvoicePaymentID from RSIAccounting.dbo.UnitInvoicePayment where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitJobCode',
    sql: id => `from RSIAccounting.dbo.UnitJobCode where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitJobCodeStateTaxRate',
    sql: id => `from RSIAccounting.dbo.UnitJobCodeStateTaxRate where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitLocation',
    sql: id => `from RSIAccounting.dbo.UnitLocation where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesApiOpenItem',
    sql: id => `from RSIAccounting.dbo.UnitNotesApiOpenItem where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesConfiguration',
    sql: id => `from RSIAccounting.dbo.UnitNotesConfiguration where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesContact',
    sql: id => `from RSIAccounting.dbo.UnitNotesContact where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesConversionKey',
    sql: id => `from RSIAccounting.dbo.UnitNotesConversionKey where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesDataFeed',
    sql: id => `from RSIAccounting.dbo.UnitNotesDataFeed where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesLogin',
    sql: id => `from RSIAccounting.dbo.UnitNotesLogin where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesRsiInvoice',
    sql: id => `from RSIAccounting.dbo.UnitNotesRsiInvoice where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesSupportRequest',
    sql: id => `from RSIAccounting.dbo.UnitNotesSupportRequest where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesTaxPayment',
    sql: id => `from RSIAccounting.dbo.UnitNotesTaxPayment where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitNotesTaxPaymentChartOfAccount',
    sql: id => `from RSIAccounting.dbo.UnitNotesTaxPaymentChartOfAccount where CorporateChartOfAccountID in (select CorporateChartOfAccountID from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPackageSetup',
    sql: id => `from RSIAccounting.dbo.UnitPackageSetup where DeliveryUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPackageSetup',
    sql: id => `from RSIAccounting.dbo.UnitPackageSetup where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayroll',
    sql: id => `from RSIAccounting.dbo.UnitPayroll where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollAccountsPayableLiability',
    sql: id => `from RSIAccounting.dbo.UnitPayrollAccountsPayableLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollCalendar',
    sql: id => `from RSIAccounting.dbo.UnitPayrollCalendar where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollCalendarTaxDue',
    sql: id => `from RSIAccounting.dbo.UnitPayrollCalendarTaxDue where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollDirectDeposit',
    sql: id => `from RSIAccounting.dbo.UnitPayrollDirectDeposit where ACHUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollServiceTransaction',
    sql: id => `from RSIAccounting.dbo.UnitPayrollServiceTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPayrollTotal',
    sql: id => `from RSIAccounting.dbo.UnitPayrollTotal where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitPensionPlan',
    sql: id => `from RSIAccounting.dbo.UnitPensionPlan where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitProcessedFormCount',
    sql: id => `from RSIAccounting.dbo.UnitProcessedFormCount where UnitInvoiceID in (select UnitInvoiceID from RSIAccounting.dbo.UnitInvoice where RSIpaymentUnit in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitProduct',
    sql: id => `from RSIAccounting.dbo.UnitProduct where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitQuarterClose',
    sql: id => `from RSIAccounting.dbo.UnitQuarterClose where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitQueryCounts',
    sql: id => `from RSIAccounting.dbo.UnitQueryCounts where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRecipe',
    sql: id => `from RSIAccounting.dbo.UnitRecipe where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRecipeDailyCost',
    sql: id => `from RSIAccounting.dbo.UnitRecipeDailyCost where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRecipeIngredient',
    sql: id => `from RSIAccounting.dbo.UnitRecipeIngredient where CorporateRecipeIngredientID in (select CorporateRecipeID from RSIAccounting.dbo.CorporateRecipe where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRecipeIngredientDailyCost',
    sql: id => `from RSIAccounting.dbo.UnitRecipeIngredientDailyCost where CorporateRecipeIngredientId in (select CorporateRecipeID from RSIAccounting.dbo.CorporateRecipe where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRecipeProductMix',
    sql: id => `from RSIAccounting.dbo.UnitRecipeProductMix where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRSIImpoundTransaction',
    sql: id => `from RSIAccounting.dbo.UnitRSIImpoundTransaction where RSIUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitRSIImpoundTransaction',
    sql: id => `from RSIAccounting.dbo.UnitRSIImpoundTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegment',
    sql: id => `from RSIAccounting.dbo.UnitSegment where UnitSegmentId in (select UnitSegmentId from RSIAccounting.dbo.UnitSegmentUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegmentBenefit',
    sql: id => `from RSIAccounting.dbo.UnitSegmentBenefit where UnitSegmentId in (select UnitSegmentId from RSIAccounting.dbo.UnitSegmentUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegmentReminder',
    sql: id => `from RSIAccounting.dbo.UnitSegmentReminder where UnitSegmentId in (select UnitSegmentId from RSIAccounting.dbo.UnitSegmentUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegmentRole',
    sql: id => `from RSIAccounting.dbo.UnitSegmentRole where UnitSegmentId in (select UnitSegmentId from RSIAccounting.dbo.UnitSegmentUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegmentUnit',
    sql: id => `from RSIAccounting.dbo.UnitSegmentUnit where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '1',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitSegmentUnit',
    sql: id => `from RSIAccounting.dbo.UnitSegmentUnit where UnitSegmentUnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitShift',
    sql: id => `from RSIAccounting.dbo.UnitShift where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitShippingInstruction',
    sql: id => `from RSIAccounting.dbo.UnitShippingInstruction where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitStandardJournalEntry',
    sql: id => `from RSIAccounting.dbo.UnitStandardJournalEntry where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitStandardJournalEntryChartOfAccountTransaction',
    sql: id => `from RSIAccounting.dbo.UnitStandardJournalEntryChartOfAccountTransaction where CorporateChartOfAccountID in (select CorporateChartOfAccountID from RSIAccounting.dbo.CorporateChartOfAccount where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxDeposit',
    sql: id => `from RSIAccounting.dbo.UnitTaxDeposit where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntity',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntity where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityCityTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityCityTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityCountyTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityCountyTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityFederalTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityFederalTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityOtherTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityOtherTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntitySchoolDistrictTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntitySchoolDistrictTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityStateTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityStateTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingEntityYearlyTax',
    sql: id => `from RSIAccounting.dbo.UnitTaxingEntityYearlyTax where UnitTaxingEntityID in (select UnitTaxingEntityID from RSIAccounting.dbo.UnitTaxingEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingGroup',
    sql: id => `from RSIAccounting.dbo.UnitTaxingGroup where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxingGroupEntity',
    sql: id => `from RSIAccounting.dbo.UnitTaxingGroupEntity where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxLiability',
    sql: id => `from RSIAccounting.dbo.UnitTaxLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxLiabilityPayment',
    sql: id => `from RSIAccounting.dbo.UnitTaxLiabilityPayment where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxLiabilityPaymentContent',
    sql: id => `from RSIAccounting.dbo.UnitTaxLiabilityPaymentContent where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxLiabilityRequestPayment',
    sql: id => `from RSIAccounting.dbo.UnitTaxLiabilityRequestPayment where UnitTaxLiabilityID in (select UnitTaxLiabilityID from RSIAccounting.dbo.UnitTaxLiability where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxLiabilityTransaction',
    sql: id => `from RSIAccounting.dbo.UnitTaxLiabilityTransaction where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitTaxWorkSheetUserSupplied',
    sql: id => `from RSIAccounting.dbo.UnitTaxWorkSheetUserSupplied where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitVendor',
    sql: id => `from RSIAccounting.dbo.UnitVendor where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitVendorAutomaticInvoiceDetailLineItem',
    sql: id => `from RSIAccounting.dbo.UnitVendorAutomaticInvoiceDetailLineItem where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitVendorInventoryItem',
    sql: id => `from RSIAccounting.dbo.UnitVendorInventoryItem where UnitInventoryItemID in (select UnitInventoryItemID from RSIAccounting.dbo.UnitInventoryItem where UnitID in (select UnitID from RSIAccounting.dbo.Unit Where CorporateID = ${id}))`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'UnitYearEndClosing',
    sql: id => `from RSIAccounting.dbo.UnitYearEndClosing where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'W2AccessCode',
    sql: id => `from RSIAccounting.dbo.W2AccessCode where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'W2VerificationQuestionAnswer',
    sql: id => `from RSIAccounting.dbo.W2VerificationQuestionAnswer where EmployeeID in (select EmployeeID from RSIAccounting.dbo.Employee where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'WebUser',
    sql: id => `from RSIAccounting.dbo.WebUser where CorporateID = ${id}`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'WorkingOrder',
    sql: id => `from RSIAccounting.dbo.WorkingOrder where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'ZaruImportedInvoiceBatch',
    sql: id => `from RSIAccounting.dbo.ZaruImportedInvoiceBatch where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'ZaruImportedInvoiceScan',
    sql: id => `from RSIAccounting.dbo.ZaruImportedInvoiceScan where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  },
  {
    v: '0',
    database: 'RSIAccounting',
    tableowner: 'dbo',
    table: 'ZaruInvoiceRequest',
    sql: id => `from RSIAccounting.dbo.ZaruInvoiceRequest where UnitID in (select UnitID from RSIAccounting.dbo.Unit where CorporateID = ${id})`
  }
]