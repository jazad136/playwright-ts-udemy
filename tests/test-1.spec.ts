import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://eaapp.somee.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Account/Login');

  await page.getByLabel('UserName').fill('admin');
  
  await page.getByLabel('Password').fill('password');
  
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('link', { name: 'Employee List' }).click();
  
  await page.getByRole('row', { name: 'Karthik 4000 24 1 karthik@' }).getByRole('link').nth(1).click();
  
  await page.getByLabel('Salary').fill('18000');
  
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.getByRole('link', { name: 'Log off' }).click();
});

test('undotest', async ({ page }) => {
  await page.goto('http://eaapp.somee.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL('http://eaapp.somee.com/Account/Login');

  await page.getByLabel('UserName').fill('admin');
  
  await page.getByLabel('Password').fill('password');
  
  await page.getByRole('button', { name: 'Log in' }).click();
  
  await page.getByRole('link', { name: 'Employee List' }).click();
  
  await page.getByRole('row', { name: 'Karthik 18000 24 1 karthik@' }).getByRole('link').nth(1).click();
  
  await page.getByLabel('Salary').fill('4000');
  
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.getByRole('link', { name: 'Log off' }).click();
});